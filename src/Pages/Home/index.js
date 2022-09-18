import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GameItem from "../../Components/Game/GameListing/GameItem";
import Hero from "../../Components/Hero/Hero"
import NewGames from "../../Components/Newgames/newgames";
import { IconButton } from "../../Components/Shared/Buttons/Buttons";
import TrandingGames from "../../Components/TrandingGames/TrandingGames";

const Home = ()=>{
    const url = "https://www.freetogame.com/api/games";
    const [gameList, setGameList] = useState([]);
    const getGames = async () => {
        const response = await fetch(url);
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