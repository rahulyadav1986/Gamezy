import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MaterialIcon from 'material-icons-react';
import { IconButton } from "../../Shared/Buttons/Buttons";
import { NewGameSkeleton, SingleGameSkeleton } from "./../../Shared/Skeletons/Skeletons";
import './gamedetails.scss';
const GameDetails = () => {
    const { id } = useParams();
    const url = "https://www.freetogame.com/api/game";
    const [gameDetails, setGameDetails] = useState([]);
    const [loader, setLoader] = useState(false);
    const getgameDetails = async () => {
        setLoader(true);
        const response = await fetch(url + `?id=${id}`);
        const actualUrl = await response.json();
        setGameDetails(actualUrl);
        setLoader(false);
    }

    useEffect(() => {
        getgameDetails()
    }, []);

    const [textRead, setTextRead] = useState(false);
    const setMore = () => {
        setTextRead(!textRead)
    }
    return (
        <>

            <div className="new_games_wrapper">
                <div className="container">
                    {

                        loader ? <SingleGameSkeleton /> :
                            <>
                                <div className="game_summery">
                                    <div className="left">
                                        <img src={gameDetails.thumbnail} alt="" />
                                        <div className="button_wrapper">
                                            <div className="free_button">FREE</div>
                                            <a href={gameDetails.freetogame_profile_url} target="_blank">
                                                Play Now
                                            </a>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <h1>{gameDetails.title}</h1>
                                        <h2>Additional Information</h2>
                                        <ul className="tag_details">
                                            <li><strong>Genre</strong>{gameDetails.genre}</li>
                                            <li><strong>platform</strong>{gameDetails.platform}</li>
                                            <li><strong>publisher</strong>{gameDetails.publisher}</li>
                                            <li><strong>developer</strong>{gameDetails.developer}</li>
                                            <li><strong>release_date</strong>{gameDetails.release_date}</li>
                                            <li><strong>status</strong>{gameDetails.status}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="game_extra_details">
                                    <h2>About {gameDetails.title}</h2>
                                    <p className={textRead ? "active" : ""}>{gameDetails.description}</p>
                                    <div className="more" onClick={setMore}>More {textRead ? "-" : "+"}</div>
                                </div>
                            </>


                    }

                </div>
            </div>


        </>
    )
}

export default GameDetails


