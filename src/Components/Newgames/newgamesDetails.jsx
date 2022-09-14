import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import MaterialIcon from 'material-icons-react';
import { SingleGameSkeleton } from "../Shared/Skeletons/Skeletons";
const NewGamesDetails = () => {
    // const url = "https://www.freetogame.com/api/games";
    const { id } = useParams();
    const url = "https://www.freetogame.com/api/game";
    const [gameDetails, setGameDetails] = useState([]);
    const [newLoader, setNewLoader] = useState(false);
    const getgameDetails = async () => {
        setNewLoader(true);
        const response = await fetch(url + `?id=${id}`);
        const actualUrl = await response.json();
        setGameDetails(actualUrl);
        setNewLoader(false);
    }

    useEffect(() => {
        getgameDetails()
    }, [])



    return (
        <>
            <Hero />
            <div className="new_games_wrapper">
                <div className="container">
                    <div className="heading text-center">
                        <h2><span>New</span> games</h2>
                    </div>
                    <div className="details_area inner">
                        <ul className="game_list">
                            {
                                newLoader ? <SingleGameSkeleton />
                                    :
                                    <li className="d-flex justify-between align-center flex-column">
                                        <div className="image_wrapper">
                                            <img src={gameDetails.thumbnail} alt="" />
                                            <div className="genre">Genre- {gameDetails.genre}</div>
                                        </div>
                                        <div className="content_wrapper">
                                            <div className="publisher">{gameDetails.publisher}</div>
                                            <h3>{gameDetails.title}</h3>
                                            <p>{gameDetails.short_description}</p>

                                        </div>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewGamesDetails


