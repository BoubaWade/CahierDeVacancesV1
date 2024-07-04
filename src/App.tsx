import "./css/App.css";
import "./css/Katex.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Sixieme/Courses";
import Error from "./pages/Error/Error";
import Sign from "./pages/Sign/Sign";
import PrivateRoutes from "./components/PrivateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import PremiereExercises from "./pages/Premiere/PremiereExercises";
import TerminaleExercises from "./pages/Terminale/TerminaleExercises";
import SixiemeExercises from "./pages/Sixieme/SixiemeExercises";
import LevelHomePremiere from "./pages/Premiere/LevelHomePremiere";
import LevelHomeTerminale from "./pages/Terminale/LevelHomeTerminale";
import LevelHomeSixieme from "./pages/Sixieme/LevelHomeSixieme";
import LevelHomeTroisieme from "./pages/Troisieme/LevelHomeTroisieme";
import TroisiemeExercises from "./pages/Troisieme/TroisiemeExercises";
import { useEffect } from "react";
import { supabase } from "./supabase/config";
import { useDispatch } from "react-redux";
import { setUser } from "./features/Sign/authSlice";
import StripeContainer from "./stripe/StripeContainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      dispatch(setUser(session?.user));
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/sign" Component={Sign} />
        <Route path="/payment" Component={StripeContainer} />
        <Route path="/troisieme" Component={LevelHomeTroisieme} />
        <Route path="/premiere" Component={LevelHomePremiere} />
        <Route path="/terminale" Component={LevelHomeTerminale} />
        <Route path="/sixieme" Component={LevelHomeSixieme} />

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
          <Route path="/sixieme/exercices:param" Component={SixiemeExercises} />
        </Route>
        <Route path="*" Component={Error} />
      </Routes>
    </Router>
  );
}

export default App;
