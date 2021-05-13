import {useState, useEffect} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import './style.css';
import About from './components/About';

import Project from './components/Project';
import Resume from './components/Resume';
import {Slide} from '@material-ui/core';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Avatar from '@material-ui/core/Avatar';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const App = (props) => {
  const [menu, setMenu] = useState(false);
  const history = useHistory();
  const [location, setLocation] = useState('home');
  

  return (
    <div className="App" onClick={_ => {if(menu){setMenu(false)}}}>
      <header className="me">
        <section className='name'>
          <h2>THOMAS CROCKETT</h2>
          <div className='underline' />
        </section>
        <nav>
          <Avatar alt="Personal Picture" src="https://i.ibb.co/KWFbnd3/self2.jpg" />
          <Link to='/' className={`${location === 'home' ? 'current-location' : ''}`} onClick={_ => setLocation('home')}>HOME</Link>
          <Link to='/projects' className={`${location === 'projects' ? 'current-location' : ''}`} onClick={_ => setLocation('projects')}>PROJECTS</Link>
          <Link to='/resume' className={`${location === 'resume' ? 'current-location' : ''}`} onClick={_ => setLocation('resume')}>RESUME</Link>
          <Link to='/contact' className={`${location === 'contact' ? 'current-location' : ''}`} onClick={_ => setLocation('contact')}>CONTACT ME</Link>
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
