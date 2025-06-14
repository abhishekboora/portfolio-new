import { useRef, useEffect, useState } from 'react';

const useAnimateOnScroll = (threshold = 0.1, rootMargin = '0px') => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current; // Capture current value
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export default useAnimateOnScroll;