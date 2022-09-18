import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainGameSkeleton } from '../../Shared/Skeletons/Skeletons';

import './../GameListing/gameListing.scss';
import GameItem from './GameItem';
const GameListing = () => {
    const url = "https://www.freetogame.com/api/games";
    const [gameList, setGameList] = useState([]);
    const [loader, setLoader] = useState(false);
    const getGames = async () => {
        setLoader(true);
        const response = await fetch(url);
        const actualUrl = await response.json();
        setGameList(actualUrl);
        setLoader(false);  
    }
    useEffect(() => {
        getGames();
    }, [])
    return (
        <>
            <div className="gamelisting_wrap">
                <div className="container">
                    <div className="heading">
                        <h1>All <span>Games</span></h1>
                    </div>
                    <ul className="game_list_back">
                        {
                            loader ? <MainGameSkeleton /> :
                                gameList.map((game, i) => {
                                    return (
                                        <li key={i} >
                                            <Link to={`/games/${game.id}`}>
                                                <GameItem item={game}  />
                                            </Link>
                                        </li>                                        
                                    )
                                })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GameListing;