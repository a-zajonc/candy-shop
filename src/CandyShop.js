// import styles from './App.module.css';
import { NavigationBar } from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.js';
import { Contact } from './Pages/Contact.js';
import { Footer } from './Components/Footer';
import { About } from './Pages/About.js';
import { Shop } from './Pages/Shop.js';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={< Home />}></Route>
          <Route exact path='/sklep' element={< Shop />}></Route>
          <Route exact path='/onas' element={< About />}></Route>
          <Route exact path='/kontakt' element={< Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
