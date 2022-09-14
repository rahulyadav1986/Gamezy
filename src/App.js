import './App.scss';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import RouterOutlet from './RouterOutlet';

const App = ()=>{
  
  
  return(
    <>      
        <Header/>
        <RouterOutlet />
        <Footer />      
    </>
  )
}

export default App;
