import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MaterialIcon from 'material-icons-react';
import { IconButton } from "../../Shared/Buttons/Buttons";
import { NewGameSkeleton, SingleGameSkeleton } from "./../../Shared/Skeletons/Skeletons";
import './gamedetails.scss';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '74ff21f793mshfb4a5f778d00548p1ea89bjsn1b638d79e405',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

const GameDetails = () => {
    const { id } = useParams();
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/game";
    const [gameDetails, setGameDetails] = useState([]);
    const [loader, setLoader] = useState(false);

    const getgameDetails = async () => {
        setLoader(true);
        const response = await fetch(url + `?id=${id}`, options);
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

    const [popUp, setPopup] = useState(false);
    const popupCall = () => {
        setPopup(true)
    }
    const popupBack = () => {
        setPopup(false)
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
                                            <a onClick={popupCall} target="_blank">
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
                                {
                                    popUp &&
                                    <div className="pop">
                                        <div onClick={popupBack}>Back</div>
                                        <iframe src={gameDetails.game_url} frameborder="0"></iframe>
                                    </div>
                                }

                            </>
                    }

                </div>
            </div>


        </>
    )
}

export default GameDetails


