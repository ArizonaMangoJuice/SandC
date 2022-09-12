import React from 'react';

export const Header = () => {
    return (
        <header className='header'>
            <img className='logo' alt='S AND C house cleaning' src={require('../images/logo2.png')} />
            <nav>
                <a href='#cleaning-area' className='header-button'>Cleaning Services</a>
                <a href='#cleaning-process' className='header-button'>Our Cleaning Process</a>
                <a href='tel:+17209018627' className='estimate-button'>Request An Estimate</a>
            </nav>
        </header>
    )
}

export default Header;