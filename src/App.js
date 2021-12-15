import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Projects from './pages/Projects/Projects'
import Bookmarks from './pages/Bookmarks/Bookmarks'
import PWJ from './posts/postPwj'
import BGB from './posts/postButton'
import CWM from './posts/postCwm'
import snowflake from './assets/snowflake.svg'

function App() {
  return (
    <>
    {/* <img src={snowflake} className="child1" style={{position:"absolute"}} alt="snowflake"/>
    <img src={snowflake} className="child2" style={{position:"absolute"}}/> */}

     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/about' exact component={About}/>
       <Route path='/blog' exact component={Blog}/>
       <Route path='/projects' exact component={Projects}/>
       <Route path='/bookmarks' exact component={Bookmarks}/>
       <Route path='/playing-with-javascript-settimeout' exact component={PWJ}/>
       <Route path='/button-gradient-border' exact component={BGB}/>
       <Route path='/chai-with-mocha-unit-test' exact component={CWM}/>
     </Switch>
     <Footer/>
    </>
  );
}

export default App;
