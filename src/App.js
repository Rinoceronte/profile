import {useState, useEffect} from 'react';
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import './style.css';
import About from './components/About';

import Project from './components/Project';
import Resume from './components/Resume';
import {Slide} from '@material-ui/core';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const App = () => {
  const cards = [{card: 'music', suit: "9830"}, {card: 'fitness', suit: "9827"}, {card: 'coding', suit: "9829"}, {card: 'dance', suit: "9824"}];
  const [menu, setMenu] = useState(false);
  const history = useHistory();
  

  return (
    <div className="App" onClick={_ => {if(menu){setMenu(false)}}}>
      <header className="me"> 
                <section>
                    <h1>Hey! I'm Thomas Crockett</h1>
                </section>
                <h4>Web Developer, Software Engineer</h4>
                {!menu ? <span onClick={_ => setMenu(true)} className='material-icons menu'>menu</span> : <span onClick={_ => setMenu(false)} className='material-icons menu'>menu_open</span> }
            </header>
            <Slide in={menu} timeout={1000} direction='left'>
              <nav className={`nav ${menu ? 'show' : 'hide'}`}>
                <ul>
                <li onClick={_ => {
                    history.push('/');
                    // setMenu(false);
                  }}>Home</li>
                <li onClick={_ => {
                    history.push('/resume');
                    // setMenu(false);
                  }}>Resume</li>
                <li><ul className='submenu'>
                  Projects
                  <li onClick={_ => {
                      history.push('/project/nutritioncalculator');
                      // setMenu(false);
                    }}>Nutrition Calculator</li>
                  <li onClick={_ => {
                      history.push('/project/capoeiramastery');
                      // setMenu(false);
                    }}>Capoeira Mastery</li>
                  <li onClick={_ => {
                      history.push('/project/brainify');
                      // setMenu(false);
                    }}>Brainify</li>
                </ul></li>
                </ul>
              </nav>
              </Slide>
      {/* <Game /> */}
        <Switch>
          <Route path="/" exact component={About} />
          { /*<Route path='/music' component={Music} />
          <Route path='/fitness' component={Fitness} />
          <Route path='/dance' component={Dance} />
          <Route path='/coding' component={Coding} /> */}
          <Route path='/project/:name' component={Project} />
          <Route path='/resume' component={Resume} />
        </Switch>
      {/* <section className="cards">
        {cards.map((el, i) => <Link to ={`/${el.card}`}>
            <Card card={el.card} suit={el.suit} key={i}/>
          </Link>)}
      </section> */}
      <footer>

      </footer>
    </div>
  );
}

export default App;
