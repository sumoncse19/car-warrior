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
import UpdateOrderStatus from './Pages/Dashboard/Admin/ManageOrder/UpdateOrderStatus';
import Payment from './Pages/Dashboard/User/Payment/Payment';
import Review from './Pages/Dashboard/User/Review/Review';
import ManageProduct from './Pages/Dashboard/Admin/ManageProduct/ManageProduct';
import UpdateProduct from './Pages/Dashboard/Admin/ManageProduct/UpdateProduct/UpdateProduct';
import NotFound from './Pages/NotFound/NotFound';

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

            <PrivateRoute exact path='/allcar/:purchase'>
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute exact path="/myOrders">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute exact path="/payment">
              <Payment></Payment>
            </PrivateRoute>

            <PrivateRoute exact path="/review">
              <Review></Review>
            </PrivateRoute>

            <AdminRoute exact path="/manageOrders">
              <ManageOrder></ManageOrder>
            </AdminRoute>

            <AdminRoute exact path="/addProduct">
              <AddProduct></AddProduct>
            </AdminRoute>

            <AdminRoute exact path="/allOrder/updateStatus/:id">
              <UpdateOrderStatus></UpdateOrderStatus>
            </AdminRoute>

            <AdminRoute exact path="/manageProduct">
              <ManageProduct></ManageProduct>
            </AdminRoute>

            <AdminRoute exact path="/manageProduct/update/:id">
              <UpdateProduct></UpdateProduct>
            </AdminRoute>

            <AdminRoute exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
