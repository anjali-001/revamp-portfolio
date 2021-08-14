import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Projects from './pages/Projects/Projects'
import Bookmarks from './pages/Bookmarks/Bookmarks'
import snowflake from './assets/snowflake.svg'

function App() {
  return (
    <>
    {/* <img src={snowflake} className="child1" style={{position:"absolute"}} alt="snowflake"/>
    <img src={snowflake} className="child2" style={{position:"absolute"}}/> */}

     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/blog' exact component={Blog}/>
       <Route path='/projects' exact component={Projects}/>
       <Route path='/bookmarks' exact component={Bookmarks}/>
     </Switch>
     <Footer/>
    </>
  );
}

export default App;
