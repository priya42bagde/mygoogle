import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import Search from './components/Search';
function App() {
  return (
    <div className="App" >
       <Router>
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/search" exact component={Search}/>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
