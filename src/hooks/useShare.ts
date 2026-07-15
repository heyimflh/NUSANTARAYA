import { useState, useCallback } from 'react';

interface ShareOptions {
  title: string;
  text: string;
  url: string;
}

export function useShare() {
  const [isSharing, setIsSharing] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const share = useCallback(async (options: ShareOptions) => {
    setIsSharing(true);
    setHasCopied(false);

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(options)) {
        await navigator.share(options);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(options.url);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
    } finally {
      setIsSharing(false);
    }
  }, []);

  return { share, isSharing, hasCopied };
}
