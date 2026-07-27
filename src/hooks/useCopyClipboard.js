import { useState, useEffect, useRef } from 'react';


const useCopyClipboard = () => {
  const [currentText, setCurrentText] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef(null);
  const originalTextRef = useRef(''); // Safely preserves the original value

  const copy = (e) => {
    // Check that the event and the element exist
    if (!e || !e.currentTarget) return;
    const element = e.currentTarget;

    // If it is already in the “Copied!” state, we ignore consecutive clicks
    if (isCopied) return;

    // Read the text displayed on the button at that moment ({value})
    const textToCopy = element.textContent || '';
    originalTextRef.current = textToCopy;
    setCurrentText(textToCopy);

    // We copy to the clipboard natively
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setIsCopied(true);

        // After 500 ms, we restore the original state
        timeoutRef.current = setTimeout(() => {
          setIsCopied(false);
          setCurrentText(null);
        }, 500);
      })
      .catch((err) => {
        console.error('Error to copy:', err);
      });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // If it has been copied, we return “Copied!”. Otherwise, we let the component use its original {value}
  return {
    displayText: isCopied ? 'Copied!' : null,
    copy
  };

};

export default useCopyClipboard;