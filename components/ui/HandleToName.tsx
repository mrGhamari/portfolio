import type { CSSProperties } from 'react';

type Letter = {
  char: string;
  /** Part of the handle: visible from the start. Otherwise it grows in. */
  kept: boolean;
  /** Handle spelling when it differs in case (the handle's "m" for "M"). */
  from?: string;
};

/**
 * Maps each character of `name` to whether it belongs to `handle`, matching
 * the handle as an in-order, case-insensitive subsequence of the name
 * ("mrGhamari" inside "Mohammadreza Ghamari"). Returns null if it isn't one.
 */
function matchHandle(name: string, handle: string): Letter[] | null {
  const letters: Letter[] = [];
  let h = 0;
  for (const char of name) {
    const next = handle[h];
    if (next !== undefined && next.toLowerCase() === char.toLowerCase()) {
      letters.push({ char, kept: true, ...(next !== char && { from: next }) });
      h += 1;
    } else {
      letters.push({ char, kept: false });
    }
  }
  return h === handle.length ? letters : null;
}

const HANDLE_RISE = 0.1; // s: handle letters rise in
const HANDLE_STAGGER = 0.035;
const GROW_START = 0.95; // s: missing letters open up
const GROW_STAGGER = 0.035;

// Passed as a custom property: each letter runs two animations with different delays.
const d = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties;

type HandleToNameProps = {
  name: string;
  handle: string;
};

/**
 * Renders `name`, animating from `handle`: the handle's letters appear first,
 * then the missing ones open up between them. CSS-only (see `.hn-*` in
 * globals.css), so it runs without JavaScript, and the DOM text is always the
 * full name exactly once.
 */
export function HandleToName({ name, handle }: HandleToNameProps) {
  const letters = matchHandle(name, handle);
  if (!letters) return <>{name}</>;

  let kept = 0;
  let grown = 0;

  // Words stay unbreakable; lines may only break at the space between them.
  const words: Letter[][] = [[]];
  for (const letter of letters) {
    if (letter.char === ' ') words.push([letter], []);
    else words[words.length - 1].push(letter);
  }

  const renderLetter = (letter: Letter, key: number) => {
    const char = letter.char === ' ' ? ' ' : letter.char;
    if (!letter.kept) {
      return (
        <span key={key} className="hn-grow" style={d(GROW_START + grown++ * GROW_STAGGER)}>
          <span>{char}</span>
        </span>
      );
    }
    const style = d(HANDLE_RISE + kept++ * HANDLE_STAGGER);
    if (letter.from) {
      return (
        <span key={key} className="hn-keep hn-morph" data-from={letter.from} style={style}>
          <span className="hn-morph-to">{char}</span>
        </span>
      );
    }
    return (
      <span key={key} className="hn-keep" style={style}>
        {char}
      </span>
    );
  };

  let key = 0;
  return (
    <>
      {words.map((word, i) =>
        word.length === 1 && word[0].char === ' ' ? (
          renderLetter(word[0], key++)
        ) : (
          <span key={`w${i}`} className="whitespace-nowrap">
            {word.map((letter) => renderLetter(letter, key++))}
          </span>
        ),
      )}
    </>
  );
}
