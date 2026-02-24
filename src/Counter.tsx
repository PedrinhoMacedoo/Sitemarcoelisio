import { useEffect, useState, useRef } from 'react';

interface CounterProps {
    value: string;
    duration?: number;
    className?: string;
    prefixColor?: string;
}

export default function Counter({ value, duration = 2000, className = "", prefixColor = "" }: CounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    const hasK = value.toUpperCase().includes('K');
    const hasPlus = value.includes('+');
    const numericPart = parseFloat(value.replace(',', '.').replace(/K/i, '').replace('+', ''));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const end = numericPart;

        function animate(currentTime: number) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Cubic ease-out
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(end * easeProgress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }, [isVisible, numericPart, duration]);

    const formattedCount = count.toLocaleString('pt-BR', {
        minimumFractionDigits: count >= 10 || numericPart % 1 === 0 ? 0 : 1,
        maximumFractionDigits: 1,
    });

    const isPlusAtStart = value.startsWith('+');

    return (
        <span ref={elementRef} className={`tabular-nums ${className}`}>
            {isPlusAtStart && (
                <span className={`${prefixColor} font-black mr-1`}>+</span>
            )}
            {formattedCount}
            {hasK ? <span className="ml-0.5">K</span> : ''}
            {!isPlusAtStart && hasPlus && (
                <span className={`${prefixColor} font-black ml-1`}>+</span>
            )}
        </span>
    );
}
