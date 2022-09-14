import './header.scss';
import MaterialIcon from 'material-icons-react';
import { IconButton } from '../Buttons/Buttons';
import { Link } from 'react-router-dom';
const HeaderInner = ()=>{
    return(
        <>
            <header>
                <div className="container d-flex align-center justify-between">
                    <div className="left_details d-flex align-center">
                        <div className="logo"><Link to="/"><img src="./assets/images/logo.png" alt="" /></Link></div>
                        <ul className="main_nav d-flex align-center">
                            <li><Link to="/">Explore</Link></li>
                            <li><Link to="/">Releases</Link></li>
                        </ul>
                        <div className="responsive_right_details">
                            <IconButton title="" url="/login" icon="person" />
                            <IconButton title="" url="" icon="menu" />
                        </div>
                        
                        <div className="search_area">
                            <input type="text" className="text_field" />
                            <MaterialIcon icon="manage_search" />                            
                        </div>
                    </div>
                    <div className="right_details d-flex">
                        <IconButton title="Login" url="/login" icon="person" />
                        <IconButton title="Sign Up" url="/signup" icon="people_alt" />
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default HeaderInner;

