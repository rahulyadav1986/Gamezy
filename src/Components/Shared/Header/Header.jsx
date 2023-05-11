import headerStyle from './header.module.scss';
import MaterialIcon from 'material-icons-react';
import { IconButton } from '../Buttons/Buttons';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
    const location = next();
    const actualLocation = location.pathname;
    if (actualLocation === "/" || actualLocation === "/login" || actualLocation === "/signup") {
        return (
            <>
                <header>
                    <div className="container d-flex align-center justify-between">
                        <div className="left_details d-flex align-center">
                            <div className={headerStyle.logo}><Link to="/"><img src="assets/images/logo.png" alt="" /></Link></div>
                            <ul className={[headerStyle.main_nav, headerStyle['d-flex']].join('')}>
                                <li><Link to="/games">Explore</Link></li>
                                <li><Link to="/">Releases</Link></li>
                            </ul>                                                                          
                            <div className={headerStyle.responsive_right_details}>
                                <IconButton title="" url="/login" icon="person" />
                                <IconButton title="" url="" icon="menu" />
                            </div>

                            <div className={headerStyle.search_area}>
                                <input type="text" className="text_field" />
                                <MaterialIcon icon="manage_search" />
                            </div>
                        </div>
                        <div className="headerStyle.right_details d-flex">
                            <IconButton title="Login" url="/login" icon="person" />
                            <IconButton title="Sign Up" url="/signup" icon="people_alt" />
                        </div>

                    </div>
                </header>
            </>
        )
    }
    return (
        <>
            <header className={headerStyle.innerHeader}>
                <div className="container d-flex align-center justify-between">
                    <div className="left_details d-flex align-center">
                        <div className={headerStyle.logo}><Link to="/"><img src="assets/images/logo.png" alt="" /></Link></div>
                        <ul className="headerStyle.main_nav d-flex align-center">
                            <li><Link to="/games">Explore</Link></li>
                            <li><Link to="/">Releases</Link></li>
                        </ul>
                        <div className="headerStyle.responsive_right_details">
                            <IconButton title="" url="/login" icon="person" />
                            <IconButton title="" url="" icon="menu" />
                        </div>

                        <div className="headerStyle.search_area">
                            <input type="text" className="text_field" />
                            <MaterialIcon icon="manage_search" />
                        </div>
                    </div>
                    <div className="headerStyle.right_details d-flex">
                        <IconButton title="Login" url="/login" icon="person" />
                        <IconButton title="Sign Up" url="/signup" icon="people_alt" />
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;

