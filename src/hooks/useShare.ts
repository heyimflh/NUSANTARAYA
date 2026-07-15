import { useState, useCallback, useRef, useEffect } from 'react';

interface ShareOptions {
  title: string;
  text: string;
  url: string;
}

export function useShare() {
  const [isSharing, setIsSharing] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const share = useCallback(async (options: ShareOptions) => {
    setIsSharing(true);
    setHasCopied(false);
    setError(null);

    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare(options))) {
        await navigator.share(options);
      } else {
        // Fallback to clipboard
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(options.url);
        } else {
          // Legacy textarea fallback
          const textArea = document.createElement("textarea");
          textArea.value = options.url;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            document.execCommand('copy');
          } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
          }
          document.body.removeChild(textArea);
        }
        setHasCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setHasCopied(false), 2000);
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        console.error('Error sharing:', err);
        setError(err);
      }
    } finally {
      setIsSharing(false);
    }
  }, []);

  return { share, isSharing, hasCopied, error };
}
