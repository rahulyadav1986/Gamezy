import { Link, NavLink } from 'react-router-dom';
import './footer.scss';
const Footer = ()=>{
    return(
        <>
            <footer>
                <div className="container d-flex align-center justify-between">
                    <div className="menu_wrapper">
                        <ul className="footer_menu d-flex align-center justify-between">
                            <li><NavLink to="/"> About Us </NavLink></li>
                            <li><NavLink to="/"> API </NavLink></li>
                            <li><NavLink to="/"> Contact Us </NavLink></li>
                            <li><NavLink to="/"> Help/FAQ </NavLink></li>
                            <li><NavLink to="/"> Support & Bugs </NavLink></li>
                            <li><NavLink to="/"> Feature Request </NavLink></li>
                            <li><NavLink to="/"> Privacy Policy </NavLink></li>
                            <li><NavLink to="/"> Cookies Policy </NavLink></li>
                            <li><NavLink to="/"> Terms of Use </NavLink></li>
                        </ul>
                        
                    </div>
                    <div className="footer_logo d-flex justify-end">
                        <Link to="/"><img src="./assets/images/logo.png" alt="" /></Link>
                    </div>
                </div>
                
            </footer>
            <div className="copy_right">
                <div className="container d-flex align-center justify-between">
                    <p>© 2022 Codex Rahul, all rights reserved. All trademarks are property of their respective owners.</p>
                    <ul className="social d-flex align-center justify-between">
                        <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-square-instagram"></i></a></li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Footer;