import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GameItem from "../../Components/Game/GameListing/GameItem";
import Hero from "../../Components/Hero/Hero"
import NewGames from "../../Components/Newgames/newgames";
import { IconButton } from "../../Components/Shared/Buttons/Buttons";
import TrandingGames from "../../Components/TrandingGames/TrandingGames";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74ff21f793mshfb4a5f778d00548p1ea89bjsn1b638d79e405',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
const Home = ()=>{
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const [gameList, setGameList] = useState([]);
    const getGames = async () => {
        const response = await fetch(url, options);
        const actualUrl = await response.json();
        setGameList(actualUrl);
    }
    useEffect(() => {
        getGames();
    }, [])
    return(
        <>
            <Hero />
            <TrandingGames />
            <NewGames />
            <div className="gamelisting_wrap">
                <div className="container">
                    <div className="heading d-flex align-center justify-between">
                        <h1>All <span>Games</span></h1>
                        <IconButton url="/games" icon="arrow_circle_right" title="Explore All" />
                    </div>
                    <ul className="game_list_back">
                        {
                            gameList.slice(20,38).map((game, i) => {
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

export default Home;