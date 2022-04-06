import styles from './App.module.css';
import { NavigationBar } from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home.js';
import { Contact } from './Pages/Contact.js';
import { Footer } from './Components/Footer';
import { About } from './Pages/About.js';
import { Shop } from './Pages/Shop.js';
import { Candy } from './Pages/Shop/Candy.js'
import { SaltySnacks } from './Pages/Shop/SaltySnacks.js'
import { ChocolateBars } from './Pages/Shop/ChocolateBars.js'
import { Sodas } from './Pages/Shop/Sodas.js'

function App() {
  return (
    <Router>
      <div className={styles.contentWrap}>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={< Home />}></Route>
          <Route exact path='/sklep' element={< Shop />}></Route>
          <Route exact path='/onas' element={< About />}></Route>
          <Route exact path='/kontakt' element={< Contact />}></Route>
          <Route exact path='/sklep/cukierki' element={< Candy />}></Route>
          <Route exact path='/sklep/przekaskislone' element={< SaltySnacks />}></Route>
          <Route exact path='/sklep/czekoladyibatoniki' element={< ChocolateBars />}></Route>
          <Route exact path='/sklep/napoje' element={< Sodas />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
