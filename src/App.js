//import logo from './logo.svg';
import "./App.css";
//import Login from './Login';
import Login from "./pages/Login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup.js";
import Home from "./pages/Home/Home.js";
import Profile from "./pages/Profile/Profile.js";
import { AuthProvider } from "./context.js/AuthContext.js";
import Category from "./pages/Category/Category.js";
import Cart from "./pages/Cart/Cart.js";

function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <div className="conent-wrap">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/category" element={<Category />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
