
import Navbar from "./component/navigation/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./component/routers/about";
import SignIn from "./component/authentication/signin";
import Houses from "./component/routers/Houses";
import Footer from "./component/fotter/footer";
import { Fragment } from "react";
import { useEffect } from "react";
import Home from "./component/Home";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  },[location])
  return (
    <Fragment>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home/>}/>
        <Route path="Houses/*" element={<Houses />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="about" element={<AboutUs />} />
        
      </Route>
    </Routes>
    <Footer/>
    </Fragment>
  );
}

export default App;
