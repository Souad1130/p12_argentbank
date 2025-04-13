import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import Layout from "./layout/Layout";


const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<Dashboard />} />
          {/* path="*" if the path does not correspond to any route declared above */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
