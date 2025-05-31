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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategories from './components/Dashboard/Category/AddCategories';
import ManageCategories from './components/Dashboard/Category/ManageCategories';
import AddTeamMember from './components/Dashboard/TeamMember/AddTeamMember';
import ManageTeamMember from './components/Dashboard/TeamMember/ManageTeamMember';
import Navbar from './components/Nav/Navbar';
function App() {
  return (
    <div className=" ">
       <TopNav></TopNav>
       {/* <Nav></Nav> */}
       <Navbar></Navbar>
       
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
     <Route path="add-product" element={<ProtectedRoute><AddCategories /></ProtectedRoute>} />
     <Route path="manage-category" element={<ProtectedRoute><ManageCategories /></ProtectedRoute>} />
     <Route path="add-team-member" element={<ProtectedRoute><AddTeamMember /></ProtectedRoute>} />
     <Route path="manage-team-member" element={<ProtectedRoute><ManageTeamMember /></ProtectedRoute>} />
         
        </Route>
 </Routes>
        
       <Footer></Footer>
             <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
}

export default App;
