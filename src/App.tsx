import "./css/App.css";
import "./css/Katex.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Cm2/Courses";
import Error from "./pages/Error/Error";
import Sign from "./pages/Sign/Sign";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import PremiereExercises from "./pages/Premiere/PremiereExercises";
import TerminaleExercises from "./pages/Terminale/TerminaleExercises";
import Cm2Exercises from "./pages/Cm2/Cm2Exercises";
import LevelHomePremiere from "./pages/Premiere/LevelHomePremiere";
import LevelHomeTerminale from "./pages/Terminale/LevelHomeTerminale";
import LevelHomeCm2 from "./pages/Cm2/LevelHomeCm2";
import LevelHomeTroisieme from "./pages/Troisieme/LevelHomeTroisieme";
import TroisiemeExercises from "./pages/Troisieme/TroisiemeExercises";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sign" Component={Sign} />
        {/* <Route path="/troisieme" Component={LevelHome} /> */}
        <Route path="/troisieme" Component={LevelHomeTroisieme} />
        <Route path="/premiere" Component={LevelHomePremiere} />
        <Route path="/terminale" Component={LevelHomeTerminale} />
        <Route path="/cm2" Component={LevelHomeCm2} />

        <Route path="/:id/cours" Component={Courses} />
        <Route Component={PrivateRoutes}>
          <Route path="/dashboard" Component={Dashboard} />
          <Route
            path="/troisieme/exercices/:param"
            Component={TroisiemeExercises}
          />
          <Route
            path="/premiere/exercices/:param"
            Component={PremiereExercises}
          />
          <Route
            path="/terminale/exercices/:param"
            Component={TerminaleExercises}
          />
          <Route path="/cm2/exercices:param" Component={Cm2Exercises} />
          {/* <Route path="/:id/exercices/" Component={Exercises} /> */}
        </Route>
        <Route path="*" Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
