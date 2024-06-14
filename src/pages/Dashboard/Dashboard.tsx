import styled from "styled-components";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar";
import MainDashboard from "./Main/MainDashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getToDosFromDatabase } from "../../supabase/api";
import { addToDoExercise } from "../../features/Dashboard/dashboardSlice";
import { RootState } from "../../app/store";

export default function Dashboard() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const todosFromDatabase = await getToDosFromDatabase(user);
  //     if (todosFromDatabase) {
  //       for (let todo of todosFromDatabase) {
  //         dispatch(addToDoExercise(todo));
  //       }
  //     }
  //   };

  //   fetchTodos();
  // }, []);
  return (
    <DashboardStyled>
      <SideBar />
      <NavBar />
      <MainDashboard />
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  width: 100vw;
`;
