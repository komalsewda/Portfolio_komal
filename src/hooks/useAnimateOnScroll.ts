import { useEffect, useRef } from 'react';

export const useAnimateOnScroll = (animation: string = 'fade-up') => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-in');
          element.classList.remove('animate-out');
        }
      },
      { threshold: 0.1 }
    );

    element.classList.add(animation);
    observer.observe(element);

    return () => observer.disconnect();
  }, [animation]);

  return elementRef;
};