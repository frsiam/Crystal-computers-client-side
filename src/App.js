import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './pages/Blogs/Blogs';
import AddProduct from './pages/Dashboard/AddProduct';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProduct from './pages/Dashboard/ManageProduct';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Users from './pages/Dashboard/Users';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAdmin from './pages/Login/RequireAdmin';
import RequireAuth from './pages/Login/RequireAuth';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='addproduct' element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>
          } />
          <Route path='manageproducts' element={
            <RequireAdmin>
              <ManageProduct />
            </RequireAdmin>
          } />
          <Route path='manageorders' element={
            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>
          } />
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          } />
        </Route>
        <Route path='blogs' element={<Blogs />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
