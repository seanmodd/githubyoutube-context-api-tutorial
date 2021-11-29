import { Home as CRUD } from './CRUD/components/Home';
import { AddUser } from './CRUD/components/AddUser';
import { EditUser } from './CRUD/components/EditUser';
import { GlobalProvider } from './CRUD/context/GlobalState';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Switch>
          <Route exact path="/crud" component={CRUD} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
