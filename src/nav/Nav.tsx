import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import './Nav.css'

interface Navlinks {
    name: string;
    href: string;
}

const Nav = () => {
    const [open, setOpen] = useState<boolean>(false);

    const navLinks: Navlinks[] = [
        { name: "خانه", href: "#" },
        { name: "درباره من", href: "#about" },
        { name: "پروژه ها", href: "#projects" },
        { name: "مهارت ها", href: "#skills" },
        { name: "راه های ارتباطی", href: "#contacts" },
    ];

    return (
        <nav className="nav">
            {/* desktop nav */}
            <ul className={`nav-links ${open ? "active" : ""}`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} onClick={() => setOpen(false)}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            {/* hamburger */}
            <div className="menu-toggle" onClick={() => setOpen(!open)}>
                <GiHamburgerMenu className="hamburger-icon" size={30} />
            </div>

            {/* logo */}
            <h1 className="logo">سپهر شایان کیا</h1>
        </nav>
    );
}

export default Nav