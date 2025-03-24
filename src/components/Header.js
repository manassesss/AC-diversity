"use client";
import { useState } from 'react';
import HeaderMobile from './HeaderMobile';
import MenuButton from './MenuButton';
import Image from 'next/image';


export default function Header() {
    //State que controla o menu hamburguer
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: 'HOME', href: '#home' },
        { label: 'SOBRE', href: '#about' },
        { label: 'PRODUTOS', href: '#products' },
    ];

    return (
        <header className="bg-[#FFFFFF] text-white fixed top-0 left-0 w-full z-50 shadow-md">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-28 items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold">
                            <Image
                                src="/logo.png"
                                width={100}
                                height={100}
                                className=''
                                alt="logo"
                            /> 
                        </a>
                    </div>
                    <div className="hidden playfair-display-font py-2 px-6 rounded-full md:block">
                        <div className="flex space-x-8">
                        {menuItems.map((item, index) => (
                                <a key={item.label}
                                href={item.href}
                                className={"text-[#1E1E1E] hover:text-[#91919F] px-7 py-2 text-xl font-regular"}
                            >
                                {item.label}
                            </a>
                            ))}
                        </div>
                    </div>
                    <div>
                    </div>
                    <MenuButton isOpen={isOpen} toggleMenu={toggleMenu}/>
                </div>
                <HeaderMobile isOpen={isOpen} menuItems={menuItems} toggleMenu={toggleMenu}/>
            </nav>
        </header>
    );
}