import { BrowserRouter as Router } from 'react-router-dom'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/Index/MainPage';

function App() {
  return (
    <Router>
      <Header/>
      <MainPage/>
      <Footer/>
    </Router>
  );
}

export default App;
