import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavigationBar from './components/NavigationBar'

import Home from './components/Home'

import DrinkDetails from './components/DrinkDetails'

const App = () => (
  <Router>
    <NavigationBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/drink/:id" component={DrinkDetails} />
    </Switch>
  </Router>
)

export default App
