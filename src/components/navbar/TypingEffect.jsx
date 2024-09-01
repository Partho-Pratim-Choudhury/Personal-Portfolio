import { useState, useEffect, useMemo } from "react";

const TypingEffect = () => {
  const words = useMemo(
    () => ["Competitive Programmer", "Web Developer", "Tech Enthusiast"],
    []
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setSpeed(50);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeoutId = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, speed, currentWordIndex, words]);

  return displayedText;
};

export default TypingEffect;
