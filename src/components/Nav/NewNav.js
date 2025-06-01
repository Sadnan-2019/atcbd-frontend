import React, { useEffect, useState } from 'react';

const NewNav = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); // Adjust scroll threshold as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
     return (
          <div>
               <div className={`header-bottom ${isSticky ? 'sticky-bar sticky-bar-styles' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="w-1/4 lg:w-auto">
                        <a href="https://atcbd.net/" className="flex-shrink-0">
                            <img src="https://atcbd.net//public/images/ATCL_Logo5.png" alt="ATCBD Logo" className="h-8 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center justify-end w-3/4">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="https://atcbd.net/">Home</a></li>
                            <li><a href="https://atcbd.net/aboutus">About</a></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Service</summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li><a href="https://atcbd.net/service">All Service</a></li>
                                        <li><a href="https://atcbd.net/service/view/1">Lab Establishment</a></li>
                                        <li><a href="https://atcbd.net/service/view/2">Sales & Support</a></li>
                                        <li><a href="https://atcbd.net/service/view/3">Delivery & Installation</a></li>
                                        {/* ... other service links ... */}
                                    </ul>
                                </details>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Product</summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li><a href="https://atcbd.net/product">All Products</a></li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Land Surveying Instrument</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/equipment-lis">Equipment List</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Test & Measuring Instrument</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/gw-instek-products">Gw Instek Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/lutron-products2">Lutron Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/tektronix-product">Tektronix Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/anritsu-products">Anritsu Products</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>CNC Machinery</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/cnc-lathe-machine">CNC Lathe Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/cnc-milling-machine">CNC Milling Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/cnc-machining-center">CNC Machining Center</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Communication Training Equipments</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/electtronica-veneta-products">Electtronica Veneta Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/etek-products">ETEK Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/man-tel">MAN & TEL</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Electrical Training Equipment</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/chungpa-et-south-korea-">Chungpa EMT (South Korea)</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/woosun-electrical-machines">Electrical Machines</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/power-generation-distribution-consumption">Power Generation, Distribution & Consumption</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Mechanical Heavy Machinery</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/lathe-machine">Lathe Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/milling-machine">Milling Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/drilling-machine">Drilling Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/grinding-machine">Grinding Machine</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>High Voltage Lab Equipment</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/high-vol">High Volt</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/demep">DeMEPA</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>ATCL Assembled Products</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/assembled-product">Assembled Products</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Fuel Analysis Equipment</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/oxigen-bomb-calorimete">Oxigen Bomb Calorimeter</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li><a href="https://atcbd.net/team">Team</a></li>
                            <li><a href="https://atcbd.net/contact">Contact</a></li>
                        </ul>

                        <a href="https://atcbd.net/contact" className="btn btn-primary ml-4">Get A Quote</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Conditionally Rendered) */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4">
                        <ul className="menu menu-compact">
                            <li><a href="https://atcbd.net/">Home</a></li>
                            <li><a href="https://atcbd.net/aboutus">About</a></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Service</summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li><a href="https://atcbd.net/service">All Service</a></li>
                                        <li><a href="https://atcbd.net/service/view/1">Lab Establishment</a></li>
                                        <li><a href="https://atcbd.net/service/view/2">Sales & Support</a></li>
                                        <li><a href="https://atcbd.net/service/view/3">Delivery & Installation</a></li>
                                        {/* ... other service links ... */}
                                    </ul>
                                </details>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Product</summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li><a href="https://atcbd.net/product">All Products</a></li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Land Surveying Instrument</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/equipment-lis">Equipment List</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Test & Measuring Instrument</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/gw-instek-products">Gw Instek Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/lutron-products2">Lutron Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/tektronix-product">Tektronix Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/anritsu-products">Anritsu Products</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>CNC Machinery</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/cnc-lathe-machine">CNC Lathe Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/cnc-milling-machine">CNC Milling Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/cnc-machining-center">CNC Machining Center</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Communication Training Equipments</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/electtronica-veneta-products">Electtronica Veneta Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/etek-products">ETEK Products</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/man-tel">MAN & TEL</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Electrical Training Equipment</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/chungpa-et-south-korea-">Chungpa EMT (South Korea)</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/woosun-electrical-machines">Electrical Machines</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/power-generation-distribution-consumption">Power Generation, Distribution & Consumption</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Mechanical Heavy Machinery</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/lathe-machine">Lathe Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/milling-machine">Milling Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/drilling-machine">Drilling Machine</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/grinding-machine">Grinding Machine</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>High Voltage Lab Equipment</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/high-vol">High Volt</a></li>
                                                    <li><a href="https://atcbd.net/product/subcategory/demep">DeMEPA</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>ATCL Assembled Products</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/assembled-product">Assembled Products</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li tabIndex={0}>
                                            <details>
                                                <summary>Fuel Analysis Equipment</summary>
                                                <ul className="p-2 bg-base-100 rounded-t-none">
                                                    <li><a href="https://atcbd.net/product/subcategory/oxigen-bomb-calorimete">Oxigen Bomb Calorimeter</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li><a href="https://atcbd.net/team">Team</a></li>
                            <li><a href="https://atcbd.net/contact">Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
          </div>
     );
};

export default NewNav;