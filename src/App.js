import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
