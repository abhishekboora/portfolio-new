import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const SectionWrapper = ({ id, children, className, animationClass = 'animate-fade-in' }) => {
    const [ref, isVisible] = useAnimateOnScroll(0.15); // Adjust threshold as needed

    return (
        <section
            id={id}
            ref={ref}
            className={`py-16 md:py-20 px-4 container mx-auto
                       ${className || ''}
                       ${isVisible ? animationClass : 'opacity-0 transform translate-y-10'}`}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;