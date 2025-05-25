import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Nav from './components/Nav/Nav';
import Landing from './components/TopNav/Landing/Landing';
import Services from './components/Services/Services';
import CompanyOverview from './components/CompanyOverview/CompanyOverview';
import Products from './components/Products/Products';
import ProductCarousel from './components/Products/ProductCarousel';
import Quote from './components/Quote/Quote';

function App() {
  return (
    <div className=" ">
       <TopNav></TopNav>
       <Nav></Nav>
       <Landing></Landing>
       <Services></Services>
       <CompanyOverview></CompanyOverview>
       <Products></Products>
       <ProductCarousel></ProductCarousel>
       <Quote></Quote>
    </div>
  );
}

export default App;
