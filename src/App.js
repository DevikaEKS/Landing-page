// import logo from './logo.svg';
import './App.css';
import Landingpage from './Banner';
import Ourstory from './Ourstory';
import Concept from './Concept';
import Footer from './Footer';
import Procedure from './Procedure';
import AppBar from './Navbarcomp';

function App() {
  return (
    <div>   
        <AppBar />
        <Landingpage />
        <Procedure />
        <Ourstory />
        <Concept />
        <Footer /> 
    </div>
  );
}

export default App;
