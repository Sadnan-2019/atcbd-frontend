import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Nav from './components/Nav/Nav';
import Landing from './components/TopNav/Landing/Landing';

function App() {
  return (
    <div className=" ">
       <TopNav></TopNav>
       <Nav></Nav>
       <Landing></Landing>
    </div>
  );
}

export default App;
