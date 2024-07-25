
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Signin from "./pages/Signin";



function App() {
  return (
    <>
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/SignIn" element={ <Signin/> } />
        <Route path="/home" element={ <Home/> } />
       </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
