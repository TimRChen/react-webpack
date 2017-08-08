import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todolist from '../components/Todolist/Todolist';
import InputModel from '../components/InputModel/InputModel';
import './index.css';


const RouteConf = () => (
  <Router>
    <div>
      <ul className="route-header">
        <li>
            <Link to="/">Todolist</Link>
        </li>
        <li>
            <Link to="/input-model">InputModel</Link>
        </li>
      </ul>

      <hr/>

      <Route exact path="/" component={Todolist}/>
      <Route path="/input-model" component={InputModel}/>
    </div>
  </Router>
);

export default RouteConf;