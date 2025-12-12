import { useState, useEffect, useRef, useCallback } from 'react';

export function useIntersectionObserver(options = {}) {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce && observerRef.current && elementRef.current) {
            observerRef.current.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      });
    },
    [triggerOnce]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return [elementRef, isInView];
}

export default useIntersectionObserver;
