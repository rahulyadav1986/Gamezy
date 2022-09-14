
import { Link } from "react-router-dom";
import MaterialIcon from 'material-icons-react';
import './buttons.scss';
const IconButton = ({title,url,icon})=>{
    return(
        <>
            <div className="custom_button">                
                <Link to={url} className="d-flex align-center">
                    <MaterialIcon icon={icon} />
                    {title}
                </Link>
            </div>
        </>
    )
}

export {IconButton};