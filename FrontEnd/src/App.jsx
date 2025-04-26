import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  return (
    
      <BrowserRouter>
      <Header/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<Dashboard />} />
          {/* path="*" if the path does not correspond to any route declared above */}
          <Route path="*" element={<Error404 />} />
          
        </Routes>
        <Footer/>
        </BrowserRouter>
       
  
  );
};

export default App;
