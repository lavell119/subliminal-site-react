import './App.css';
import Sidebarlinks from './components/Sidebarlinks'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="header">
        <div className='logo'>PREMIUM SUBLIMINALS</div>
        <nav className="nav">
          <a href="google.com">Home</a>
          <a href="google.com">How it Works</a>
          <a href="google.com">Categories</a>
        </nav>
      </div>
      <div className="middle">
        <div className="sidebar">
          <Sidebarlinks />
        </div>
        <Home />
      </div>
      <div className="footer">

      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
