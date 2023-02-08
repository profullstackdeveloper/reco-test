import React from 'react';
import { useLocation } from 'react-router-dom'

interface PropTypes extends React.HtmlHTMLAttributes<unknown> {
    children: React.ReactNode;
    targetPath: string;
}

export default function HeaderButton({children, targetPath}: PropTypes): JSX.Element {

    const { pathname } = useLocation();

    return (
        <button className={'w-full cursor-pointer flex flex-col items-center text-[8px] px-[10px] py-2 text-white ' + (pathname === targetPath ? "bg-header-button-active" : "bg-transparent")}>
            {
                children
            }
        </button>
    )
}