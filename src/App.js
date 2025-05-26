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
import TeamSlider from './components/TeamSlider/TeamSlider';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import GsapSlider from './components/GsapSlider/GsapSlider';

function App() {
  return (
    <div className=" ">
       <TopNav></TopNav>
       <Nav></Nav>
       {/* <Landing></Landing> */}
       <GsapSlider></GsapSlider>
       <Services></Services>

       <CompanyOverview></CompanyOverview>
       <Products></Products>
       <ProductCarousel></ProductCarousel>
       <Quote></Quote>
       <TeamSlider></TeamSlider>
       <News></News>
       <Footer></Footer>
    </div>
  );
}

export default App;
