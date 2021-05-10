import {useState, useEffect} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import './style.css';
import About from './components/About';

import Project from './components/Project';
import Resume from './components/Resume';
import {Slide} from '@material-ui/core';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const App = () => {
  const [menu, setMenu] = useState(false);
  const history = useHistory();
  

  return (
    <div className="App" onClick={_ => {if(menu){setMenu(false)}}}>
      <header className="me">
        <section className='name'>
          <h2>THOMAS CROCKETT</h2>
          <div className='underline' />
        </section>
        <nav>
          <Link to='/' className={`${window.location.pathname === '/' ? 'current-location' : ''}`}>HOME</Link>
          <Link to='/projects' className={`${(window.location.pathname === '/projects' || window.location.pathname ==='/project/*') ? 'current-location' : ''}`}>PROJECTS</Link>
          <Link to='/resume' className={`${window.location.pathname === '/resume' ? 'current-location' : ''}`}>RESUME</Link>
          <Link to='/contact' className={`${window.location.pathname === '/contact' ? 'current-location' : ''}`}>CONTACT ME</Link>
        </nav>
      </header>
      {/* <Game /> */}
        <Switch>
          <Route path="/" exact component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/project/:name' component={Project} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Switch>
      <footer>

      </footer>
    </div>
  );
}

export default App;
