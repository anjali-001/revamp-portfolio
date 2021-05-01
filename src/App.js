import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Projects from './pages/Projects/Projects'
import Bookmarks from './pages/Bookmarks/Bookmarks'

function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/blog' exact component={Blog}/>
       <Route path='/projects' exact component={Projects}/>
       <Route path='/bookmarks' exact component={Bookmarks}/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
