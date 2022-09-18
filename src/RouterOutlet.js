import { Route, Routes } from 'react-router-dom';
import Games from './Pages/Games';
import GameId from './Pages/Games/gameId';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const RouterOutlet = ()=>{
  return(
    <>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/games" element={<Games />} />
          <Route exact path="/games/:id" element={<GameId />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RouterOutlet;