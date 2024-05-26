import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Cm2/Courses";
import Error from "./pages/Error/Error";
import Sign from "./pages/Sign/Sign";
import PrivateRoutes from "./components/PrivateRoutes";
import ExercicesTroisieme from "./pages/Troisieme/ExercicesTroisieme";
import LevelHome from "./pages/LevelHome/LevelHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sign" Component={Sign} />
        <Route path="/:id" Component={LevelHome} />
        <Route path="/:id/cours" Component={Courses} />
        <Route Component={PrivateRoutes}>
          <Route path="/:id/exercices" Component={ExercicesTroisieme} />
        </Route>
        <Route path="*" Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
