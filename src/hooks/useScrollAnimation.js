import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold]);

    return elementRef;
};

export const useStaggeredAnimation = (delay = 100) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const children = container.querySelectorAll('.reveal');
        
        children.forEach((child, index) => {
            child.style.transitionDelay = `${index * delay}ms`;
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        children.forEach(child => observer.observe(child));

        return () => {
            children.forEach(child => observer.unobserve(child));
        };
    }, [delay]);

    return containerRef;
};
