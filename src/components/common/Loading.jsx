import { memo } from 'react';
import './Loading.css';

const Loading = memo(function Loading({ size = 'default', fullScreen = true }) {
  const sizeClass = size === 'small' ? 'loader--small' : '';

  if (fullScreen) {
    return (
      <div className="loading" role="status" aria-label="Loading content">
        <div className={`loader ${sizeClass}`} aria-hidden="true" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="loading-inline" role="status" aria-label="Loading">
      <div className={`loader ${sizeClass}`} aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </div>
  );
});

export default Loading;
