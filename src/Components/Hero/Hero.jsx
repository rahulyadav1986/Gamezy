import { useLocation } from 'react-router-dom';
import { IconButton } from '../Shared/Buttons/Buttons';
import './hero.scss';
const Hero = () => {
    const location = useLocation();
    const actualLocation = location.pathname;
    if (actualLocation === '/') {
        return (
            <>
                <div className="hero_container">
                    <div className="content_area">
                        <div className="container d-flex align-center justify-between">
                            <div className="left_area">
                                <p>Discover Games you will love</p>
                                <h1>Read About <span>games</span>  that you <strong>enjoy</strong></h1>
                                <IconButton url="/" title="start exploring" size="20" icon="data_exploration" />
                            </div>
                        </div>

                    </div>
                    <img src="assets/images/hero.png" className='hero_avator' alt="" />
                </div>
            </>
        )
    }
    return (
        <>
            <div className="hero_container inner">
                <img src="./assets/images/hero.png" className='hero_avator' alt="" />                
            </div>
        </>
    )

}

export default Hero;