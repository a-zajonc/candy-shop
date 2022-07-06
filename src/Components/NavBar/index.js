import Logo from '../../logosmall.png';
import React from 'react';

export function NavigationBar() {
    return <nav className="navbar navbar-light bg-info rounded-bottom p-2 shadow-sm">
        <a className="navbar-brand p-2vb" href="/">
            <img src={Logo} height="100px" alt="Logo" className="rounded-circle" />
        </a>
        <ul className="nav grid gap-3">
            <li className="nav-item">
                <a className="nav-link text-white fs-2" href="/sklep">Sklep</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white fs-2" href="/onas">O nas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white fs-2" href="/kontakt">Kontakt</a>
            </li>
        </ul>
    </nav>
}
