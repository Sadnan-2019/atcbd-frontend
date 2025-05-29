import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';
import AddServices from './components/Dashboard/Services/AddServices';
import ManageServices from './components/Dashboard/Services/ManageServices';

function App() {
  return (
    <div className=" ">
       <TopNav></TopNav>
       <Nav></Nav>
       
 <Routes>
        <Route path="/login" element={<Login/>}></Route>

    <Route path="/" element={<Home />}></Route>
 



    <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
                    {/* <Route index element={<MyAppoinment></MyAppoinment>}></Route> */}

     <Route path="add-services" element={<ProtectedRoute><AddServices /></ProtectedRoute>} />
     <Route path="manage-services" element={<ProtectedRoute><ManageServices /></ProtectedRoute>} />
         
        </Route>
 </Routes>
        
       <Footer></Footer>
    </div>
  );
}

export default App;
