import React, { useState, useEffect } from 'react';

interface TypingTitlesProps {
  titles: string[];
  speed?: number;
  pauseBetween?: number;
}

export default function TypingTitles({
  titles,
  speed = 50,
  pauseBetween = 2000
}: TypingTitlesProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseBetween);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentCharIndex < currentTitle.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentTitle[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentTitle.length) {
      // Finished typing, pause before deleting
      setIsPaused(true);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting, move to next title
      setIsDeleting(false);
      setCurrentCharIndex(0);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }
  }, [currentCharIndex, currentTitleIndex, displayedText, isDeleting, isPaused, titles, speed, pauseBetween]);

  return (
    <span className="inline-flex items-center">
      <span>{displayedText}</span>
      <span className="inline-block w-0.5 h-5 bg-accentBlue ml-1 animate-pulse"></span>
    </span>
  );
}
