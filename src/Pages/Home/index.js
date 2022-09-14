import Hero from "../../Components/Hero/Hero"
import NewGames from "../../Components/Newgames/newgames";
import TrandingGames from "../../Components/TrandingGames/TrandingGames";

const Home = ()=>{
    return(
        <>
            <Hero />
            <TrandingGames />
            <NewGames />
        </>
    )
}

export default Home;