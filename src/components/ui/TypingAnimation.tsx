// src/components/TypingAnimation.tsx
import React, { useState, useEffect } from 'react';
import '../../index.css';

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ texts, typingSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      if (currentCharIndex < texts[currentTextIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[currentTextIndex][currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else if (currentTextIndex < texts.length - 1) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + '\n');
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentCharIndex(0);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentTextIndex, currentCharIndex, texts, typingSpeed]);

  return (
    <div className="whitespace-pre-wrap">
      <h1 className="text-4xl font-bold maroon dark:text-darktext text-shadow-3d mb-2">
        {displayedText.split('\n')[0]}
      </h1>
      {displayedText.split('\n')[1] && (
        <h1 className="text-5xl font-bold text-black dark:text-white text-shadow-3d">
          {displayedText.split('\n')[1]}
        </h1>
      )}
    </div>
  );
};

export default TypingAnimation;
