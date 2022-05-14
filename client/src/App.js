import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Admin from './pages/Admin';
import DashBoard from './DashBoard';
 
function App() {

    return (
      <div className="App">
        <DashBoard />
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/admin" exact component={Admin} />
            </Switch>
        </Router>
      </div>
    );
}

export default App;