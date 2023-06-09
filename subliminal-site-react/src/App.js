import './App.css';
import Sidebarlinks from './components/Sidebarlinks'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HowItWorks from './components/pages/HowItWorks';
import Categories from './components/pages/Categories';
import IndividualCategory from './components/pages/IndividualCategory';
import IndividualSub from './components/pages/IndividualSub';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <div className="coupon_header">BUY 2 SUBLIMINALS GET 1 FREE</div>
    <Header />
      {/* <div className="header">
        <div className='logo'>PREMIUM SUBLIMINALS</div>
        <div className="nav_container">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/howitworks">How It Works</Link>
          <Link to="/categories">Categories</Link>   
        </nav>
        <ShoppingCart />
        </div>
        
        
       
      </div> */}
      <div className="middle">
        <div className="sidebar">
          <Sidebarlinks />
        </div>
        <div className="middle_content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/howitworks" element={<HowItWorks />} />
          <Route exact path="/categories/:id" element={<IndividualCategory />} />
          <Route exact path="/individualsub" element={<IndividualSub />} />
          <Route exact path="/subliminals/:id" element={<IndividualSub />} />

                    

        </Routes>

        </div>
        
         
          {/* <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="howitworks">
            <HowItWorks />
          </Route> */}

        
      </div>
      <div className="footer">

      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
