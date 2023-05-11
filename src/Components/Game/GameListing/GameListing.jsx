import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainGameSkeleton } from '../../Shared/Skeletons/Skeletons';

import './../GameListing/gameListing.scss';
import GameItem from './GameItem';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74ff21f793mshfb4a5f778d00548p1ea89bjsn1b638d79e405',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
const GameListing = () => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const [gameList, setGameList] = useState([]);
    const [loader, setLoader] = useState(false);
    const getGames = async () => {
        setLoader(true);
        const response = await fetch(url, options);
        const actualUrl = await response.json();
        setGameList(actualUrl);
        setLoader(false);
        console.log(actualUrl)  
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