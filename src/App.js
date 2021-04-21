import {useState, useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './style.css';
import Card from './components/Card';
import About from './components/About';
import Music from './components/Music';
import Fitness from './components/Fitness';
import Dance from './components/Dance';
import Coding from './components/Coding';
import Game from './components/chess/components/Game';

const App = () => {
  const cards = [{card: 'music', suit: "9830"}, {card: 'fitness', suit: "9827"}, {card: 'coding', suit: "9829"}, {card: 'dance', suit: "9824"}];
  

  return (
    <div className="App">
      <header><Link to="/"><h1>Thomas Crockett</h1></Link></header>
      {/* <Game /> */}
        <Switch>
          <Route path="/" exact component={About} />
          <Route path='/music' component={Music} />
          <Route path='/fitness' component={Fitness} />
          <Route path='/dance' component={Dance} />
          <Route path='/coding' component={Coding} />
        </Switch>
        <section className="cards">
          {cards.map((el, i) => <Link to ={`/${el.card}`}><Card card={el.card} suit={el.suit} key={i}/></Link>)}
        </section>
    </div>
  );
}

export default App;
