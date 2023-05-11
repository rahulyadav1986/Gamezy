import { useEffect, useState } from "react";
import { IconButton } from "../Shared/Buttons/Buttons";
import MaterialIcon from 'material-icons-react';
import './newgames.scss';
import { NewGameSkeleton } from "../Shared/Skeletons/Skeletons";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74ff21f793mshfb4a5f778d00548p1ea89bjsn1b638d79e405',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
const NewGames = () => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const [newGames, setNewgames] = useState([]);
    const [newLoader, setNewLoader] = useState(false);
    const getnewgames = async ()=>{
        setNewLoader(true);
        const response = await fetch(url, options);
        const actualUrl = await response.json();
        setNewgames(actualUrl);
        setNewLoader(false);
    };
    useEffect(()=>{
        getnewgames();
    },[]);

    

    
    return (
        <>
            <div className="new_games_wrapper">
                <div className="container">
                    <div className="heading d-flex align-center justify-between">
                        <h2>What <span>New</span> games</h2>
                        <IconButton url="/" icon="arrow_circle_right" title="Explore All" />
                    </div>
                    <div className="details_area">
                        <ul className="game_list">
                            {
                                newLoader ? <NewGameSkeleton /> 
                                :
                                newGames.slice(7,19).map((game,i)=>{
                                    return(
                                        <>
                                         
                                            <li key={i} className="d-flex justify-between align-center">
                                                <div className="image_wrapper">
                                                    <img src={game.thumbnail} alt="" />
                                                    <div className="genre">Genre- {game.genre}</div>
                                                </div>
                                                <div className="content_wrapper">
                                                    <div className="publisher">{game.publisher}</div>
                                                    <h3>{game.title}</h3>
                                                    <p>{`${game.short_description.substring(0,80)}...`}</p>
                                                    <IconButton url={`/games/${game.id}`} icon="arrow_circle_right" title="Explore" />
                                                </div>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                        <div className="subscription">
                            <div className="subscribe_card">
                                <MaterialIcon icon="favorite" />
                                <h2>subscribe to our newsletter</h2>
                                <p>Keep in touch with current gaming new and upcoming game release </p>
                                <form action="">
                                    <input type="email" className="input" placeholder="Your.Email@here.com" name="" id="" />
                                    <input type="submit" className="custom_button" value="Subscribe" />
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewGames