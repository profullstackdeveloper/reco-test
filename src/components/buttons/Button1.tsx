import React from 'react';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    content: string;
}

export default function Button1({ content, ...props }: ButtonProps): JSX.Element {
    return (
        <button {...props} className="outline-none rounded-[4px] hover:text-white text-header-background border border-header-background hover:border-none bg-transparent hover:bg-header-background">
            {
                content
            }
        </button>
    )
}