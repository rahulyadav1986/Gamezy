import { Route, Routes } from 'react-router-dom';
import NewGamesDetails from './Components/Newgames/newgamesDetails';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const RouterOutlet = ()=>{
  return(
    <>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/games/:id" element={<NewGamesDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RouterOutlet;