import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import AllCar from './Pages/Home/AllCar/AllCar';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import MyOrder from './Pages/Dashboard/User/MyOrder/MyOrder';
import ManageOrder from './Pages/Dashboard/Admin/ManageOrder/ManageOrder';
import AddProduct from './Pages/Dashboard/Admin/AddProduct/AddProduct';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route exact path="/allcar">
              <AllCar />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path='/allcar/:purchase'>
              <Purchase></Purchase>
            </Route>

            <Route exact path="/myOrders">
              <MyOrder></MyOrder>
            </Route>

            <Route exact path="/manageOrders">
              <ManageOrder></ManageOrder>
            </Route>

            <Route exact path="/addProduct">
              <AddProduct></AddProduct>
            </Route>

            <AdminRoute exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
