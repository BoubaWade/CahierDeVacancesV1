import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cm2 from "./pages/Cm2/Cm2";
import Quatrieme from "./pages/Quatrieme";
import Troisieme from "./pages/Troisieme/Troisieme";
import Premiere from "./pages/Premiere";
import Terminale from "./pages/Terminale";
import Exercises from "./pages/Troisieme/ExercisesList";
import Courses from "./pages/Cm2/Courses";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Error from "./pages/Error/Error";
import Sign from "./pages/Sign/Sign";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/connexion" Component={SignIn} />
        <Route path="/inscription" Component={SignUp} />
        <Route path="/sign" Component={Sign} />
        <Route path="/cm2" Component={Cm2}>
          <Route path="/cm2/cours" Component={Courses} />
          <Route path="/cm2/exercices" Component={Exercises} />
        </Route>
        <Route path="/quatrieme" Component={Quatrieme}>
          <Route path="/quatrieme/cours" Component={Courses} />
          <Route path="/quatrieme/exercices" Component={Exercises} />
        </Route>
        <Route path="/troisieme" Component={Troisieme}>
          <Route path="/troisieme/cours" Component={Courses} />
          <Route path="/troisieme/exercices" Component={Exercises} />
        </Route>
        <Route path="/premiere" Component={Premiere}>
          <Route path="/premiere/cours" Component={Courses} />
          <Route path="/premiere/exercices" Component={Exercises} />
        </Route>
        <Route path="/terminale" Component={Terminale}>
          <Route path="/terminale/cours" Component={Courses} />
          <Route path="/terminale/exercices" Component={Exercises} />
        </Route>
        <Route path="*" Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
