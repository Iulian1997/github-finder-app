//import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar></Navbar>
            <main className="container mx-auto px-3 pb-12">
              <Alert></Alert>
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/user/:login" element={<User></User>}></Route>
                <Route path="/notfound" element={<NotFound></NotFound>}></Route>
                <Route path="/*" element={<NotFound></NotFound>}></Route>
              </Routes>
            </main>
            <Footer></Footer>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
