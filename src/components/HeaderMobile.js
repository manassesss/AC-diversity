"use client";

export default function HeaderMobile({ isOpen, menuItems }) {

    return (
        <>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {menuItems.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={"text-[#1E1E1E] hover:text-[#91919F] block px-3 py-2 text-base playfair-display-font font-regular"}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}