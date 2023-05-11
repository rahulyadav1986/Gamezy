import { Fragment, useEffect, useState } from "react";
import { IconButton } from "../Shared/Buttons/Buttons";

import './trendingames.scss';
import { ImageSkeleton } from "../Shared/Skeletons/Skeletons";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74ff21f793mshfb4a5f778d00548p1ea89bjsn1b638d79e405',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
const TrandingGames = () => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const [trendingGameList, setTrendingGameList] = useState([]);
    const [tradentingLoader, setTradentingLoader] = useState(false);
    const [getPoptrendingGameList, setgetPoptrendingGameList] = useState(false);
    const getTrendingGameList = async () => {
        setTradentingLoader(true);
        const response = await fetch(url, options);
        const actualUrl = await response.json();
        setTrendingGameList(actualUrl);
        console.log(response);
        setTradentingLoader(false);
    }
    useEffect(() => {
        getTrendingGameList()
    }, []);
    const getPop = (i) => {
        setgetPoptrendingGameList(i)
    }
    const getClosepop = ()=>{
        setgetPoptrendingGameList(false)
    }
    return (
        <>
            <div className="trending_games">
                <div className="container">
                    <div className="heading d-flex align-center justify-between">
                        <h2>Currently <span>Trending</span> games</h2>
                        <IconButton url="/games" icon="arrow_circle_right" title="Explore All" />
                    </div>
                    
                    <ul className="gamelist">
                        {
                            tradentingLoader ? 
                            <ImageSkeleton />                            
                            :
                            trendingGameList.slice(0, 6).map((game, i) => {
                                return (
                                    <li key={i} onClick={() => getPop(i)}>
                                        <img src={game.thumbnail} alt="" />
                                    </li>
                                )
                            })
                            
                        }
                    </ul>
                    {
                        trendingGameList.slice(0,6).map((game, i) => {
                            return (
                                <Fragment>
                                    {
                                        getPoptrendingGameList === i ?
                                        <div key={i} className="game_pop" >
                                            <div className="overlay" onClick={getClosepop}></div>
                                            <div className="container">                                                
                                                <div className="details">
                                                   
                                                    <button className="close_button d-flex align-center justify-center" onClick={getClosepop}>x</button>
                                                    <img src={game.thumbnail} alt="" />
                                                    <div className="content_details">
                                                        <h3>{game.title}</h3>
                                                        <p>{`${game.short_description.substring(0, 80)}...`}</p>
                                                        <IconButton url="/" icon="arrow_circle_right" title="Explore" />
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        ""
                                    }
                                </Fragment>
                            )
                        })

                    }

                </div>

            </div>
        </>
    )
}

export default TrandingGames;