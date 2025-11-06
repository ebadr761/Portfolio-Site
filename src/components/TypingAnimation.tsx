import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  loop?: boolean;
  pauseAfter?: number;
}

export default function TypingAnimation({
  text,
  delay = 0,
  speed = 50,
  className = '',
  loop = false,
  pauseAfter = 2000
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setDisplayedText('');
      setCurrentIndex(0);
      setIsComplete(false);
      setShouldReset(false);
      return;
    }

    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(typingTimeout);
      } else if (!isComplete) {
        setIsComplete(true);

        // If loop is enabled, reset after pause
        if (loop) {
          const resetTimeout = setTimeout(() => {
            setShouldReset(true);
          }, pauseAfter);
          return () => clearTimeout(resetTimeout);
        }
      }
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, delay, speed, isComplete, loop, pauseAfter, shouldReset]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-[1em] bg-accentBlue ml-1 animate-pulse"></span>
      )}
    </span>
  );
}
