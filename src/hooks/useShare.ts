import { useState, useCallback, useRef, useEffect } from 'react';

interface ShareOptions {
  title: string;
  text: string;
  url: string;
}

function toError(value: unknown): Error {
  return value instanceof Error ? value : new Error(String(value) || "Unknown share error");
}

export function useShare() {
  const [isSharing, setIsSharing] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
          setHasCopied(true);
        } else {
          // Legacy textarea fallback
          const activeElement = document.activeElement as HTMLElement | null;
          const textArea = document.createElement("textarea");
          textArea.value = options.url;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            const success = document.execCommand('copy');
            if (!success) {
              throw new Error("execCommand returned false");
            }
            setHasCopied(true);
          } finally {
            document.body.removeChild(textArea);
            if (activeElement) {
              activeElement.focus();
            }
          }
        }
        
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setHasCopied(false), 2000);
      }
    } catch (err: unknown) {
      const errorObj = toError(err);
      if (errorObj.name !== 'AbortError') {
        console.error('Error sharing:', errorObj);
        setError(errorObj);
      }
    } finally {
      setIsSharing(false);
    }
  }, []);

  return { share, isSharing, hasCopied, error };
}
