import React from 'react'

function Header() {
    return (
        <header id="header" className="header dark-background d-flex flex-column">
            <i className="header-toggle d-xl-none bi bi-list"></i>
        
            <div className="profile-img">
            <img src="assets/img/circledprofile.png" alt="" className="img-fluid rounded-circle"/>
            </div>
        
            <a href="index.html" className="logo d-flex align-items-center justify-content-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""/> */}
            <h1 className="sitename">Haeun Kim</h1>
            </a>
        
            <div className="social-links text-center">
            {/* <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a> */}
            <a href="https://github.com/KIMHAUN" className="github" target="_blank"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/haeun-kim-4758a7249/" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100002597207758" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/haun3399/" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
            </div>
        
            <nav id="navmenu" className="navmenu">
            <ul>
                <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
                <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
                <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
                <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
                <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
                <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                    <li><a href="#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                </ul>
                </li>
                <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
            </ul>
            </nav>
    
      </header>
    )
}

export default Header
