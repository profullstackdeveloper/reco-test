import React from 'react';
import HeaderButton from './HeaderButton';

export default function Header(): JSX.Element {

    return (
        <div className='h-full flex flex-col justify-center'>
            <HeaderButton targetPath='/'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_281_380)">
                        <rect x="10.3184" y="0.5" width="7.18182" height="7.18182" rx="1.5" stroke="#FAFAFA" />
                        <rect x="10.3184" y="10.3164" width="7.18182" height="7.18182" rx="1.5" stroke="#FAFAFA" />
                        <rect x="0.5" y="0.5" width="7.18182" height="7.18182" rx="1.5" stroke="#FAFAFA" />
                        <rect x="0.5" y="10.3164" width="7.18182" height="7.18182" rx="1.5" stroke="#FAFAFA" />
                    </g>
                    <defs>
                        <clipPath id="clip0_281_380">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                Data Catalog
            </HeaderButton>
            <HeaderButton targetPath='/processes'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="7.77783" width="5.06314" height="4.95046" rx="0.5" stroke="#FAFAFA" />
                    <path d="M6 10.2562H9.06244V16.0414H13.2" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 10.2562H9.06244V4.47107H13.2" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="13.6992" y="1.5" width="5.06314" height="4.95046" rx="0.5" stroke="#FAFAFA" />
                    <rect x="13.6992" y="13.0702" width="5.06314" height="4.95047" rx="0.5" stroke="#FAFAFA" />
                </svg>
                Processes
            </HeaderButton>
            <HeaderButton targetPath='/incidents'>
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3656 3.47623L14.1947 3.55531L14.1185 3.72748L13.6635 4.7545L13.2197 3.7311L13.1435 3.5553L12.9693 3.47547L11.9318 3L12.9693 2.52454L13.1435 2.44471L13.2197 2.26891L13.6635 1.24551L14.1185 2.27253L14.1947 2.4447L14.3656 2.52377L15.3948 3L14.3656 3.47623ZM2.80271 5.51566L2.51215 5.59012L2.44107 5.88153L2.43902 5.88991L2.43698 5.88153L2.3659 5.59012L2.07533 5.51566L2.01426 5.50001L2.07533 5.48436L2.3659 5.4099L2.43698 5.11848L2.43902 5.1101L2.44107 5.11848L2.51215 5.4099L2.80271 5.48436L2.86379 5.50001L2.80271 5.51566Z" fill="#FAFAFA" stroke="#FAFAFA" />
                    <path d="M1.95117 15L8.42255 8.36684C8.61876 8.16572 8.94212 8.16572 9.13833 8.36684L13.3006 12.6332C13.4968 12.8343 13.8202 12.8343 14.0164 12.6332L20 6.5" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" />
                </svg>
                Incidents
            </HeaderButton>
        </div>
    )
}