
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home';
import AllTools from './Pages/Items/AllTools';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import MyOrders from './Dashboard/MyOrders';
import AllUsers from './Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Profile from './Dashboard/Profile';
import Review from './Dashboard/Review';
import ManageOrders from './Dashboard/ManageOrders';
import AddProduct from './Dashboard/AddProduct';
import ManageProduct from './Dashboard/ManageProduct';
import Payment from './Dashboard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import PageNotFound from './Pages/Shared/PageNotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tools' element={<AllTools></AllTools>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/tool/:toolId' element={
          <RequireAuth><CheckOut></CheckOut></RequireAuth>
        }></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Profile />}></Route>
          <Route path='myorders' element={<MyOrders />}></Route>
          <Route path='review' element={<Review />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
