import React from 'react';

interface AnimatedButtonProps {
    href?: string;
    text: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({ href, text, className = "", onClick, type }: AnimatedButtonProps) {
    const innerContent = (
        <>
            <span className="relative z-10 whitespace-nowrap font-bold tracking-wide">{text}</span>
            <div className="bttn-child">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff" className="relative z-20">
                    <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
                </svg>
            </div>
        </>
    );

    if (!href) {
        return (
            <button type={type || "button"} onClick={onClick} className={`bttn-father ${className}`}>
                {innerContent}
            </button>
        );
    }

    return (
        <a href={href} onClick={onClick} className={`bttn-father ${className}`}>
            {innerContent}
        </a>
    );
}
