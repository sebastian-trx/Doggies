import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from './components/Home';
import {LandingPage} from './components/LandingPage'
import { BreedCreate } from './components/BreedCreate';
import { Detail } from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path= '/' component= {LandingPage}/>
          <Route path = '/home' component = {Home}/>
          <Route path = '/createbreed' component = {BreedCreate}/>
          <Route path = '/detail/:id' component = {Detail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
