import './App.css';
//as == rename
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    //must wrap our entire app with Router
    <Router>
    <div className="app">
    <main>
      <switch>
      <Route exact path="/" component={HomeScreen}/>
      <Route exact path="/product/:id" component={ProductScreen} />
      <Route exact path="/cart" component={CartScreen}/>
      </switch>
    </main>
    </div>
    </Router>
  );
}

export default App;
