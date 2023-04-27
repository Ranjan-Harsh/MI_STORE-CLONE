import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Slider from './components/Slider';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccess from './components/HotAccess';
import ProductRev from './components/ProductRev';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import data   from './data/data.json';
import Navoptions from './components/Navoptions';

import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

const {banner} = require('./data/data.json')
const {offer} = require('./data/data.json');
const {starProduct} = require('./data/data.json');
const {hotAccessories} = require('./data/data.json');
const  {hotAccessoriesCover}= require('./data/data.json');
const {productReviews} = require('./data/data.json');
const {videos}= require('./data/data.json');
const {footer}= require('./data/data.json');

function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>

      <Navoptions miPhones={data.miPhones}  redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>


      <Slider start={banner.start}/>
      <Offers Offers={offer}/>
      <Heading heading = {'STAR PRODUCTS'}/>
      <StarProduct starProduct={starProduct}/>
      <Heading heading = {'HOT ACCESSORIES'}/>
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path = '/music' element = {<HotAccess music = {hotAccessories.music} musicCover= {hotAccessoriesCover.music}/>}/>
        <Route exact path = '/smartdevices' element = {<HotAccess smartDevice = {hotAccessories.smartDevice} smartDeviceCover= {hotAccessoriesCover.smartDevice}/>}/>
        <Route exact path = '/home' element = {<HotAccess home = {hotAccessories.home} homeCover= {hotAccessoriesCover.home}/>}/>
        <Route exact path = '/lifestyle' element = {<HotAccess lifeStyle = {hotAccessories.lifeStyle} lifeStyleCover= {hotAccessoriesCover.lifeStyle}/>}/>
        <Route exact path = '/mobileaccessories' element = {<HotAccess mobileAccessories = {hotAccessories.mobileAccessories} mobileAccessoriesCover= {hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>

      <Heading heading = {'PRODUCT REVIEWS'}/>

      <ProductRev ProductReview={data.productReviews}/>
      <Heading heading = {'VIDEOS'}/>
      <Videos Videos={videos}/>
      <Heading heading = {'IN THE PRESS'}/>
      <Banner start={banner.end}/>
      <Footer footers={footer}/>


    </Router>

  );
}

export default App;
