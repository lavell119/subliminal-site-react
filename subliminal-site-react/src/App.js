import './App.css';
import Sidebarlinks from './components/Sidebarlinks'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className='logo'>PREMIUM SUBLIMINALS</div>
        <nav className="nav">
          <a href="google.com">Home</a>
          <a href="google.com">How it Works</a>
          <a href="google.com">Categories</a>
        </nav>
      </div>
      <div className="sidebar">
        <Sidebarlinks />

      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
