import styled from "styled-components";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";
import MainDashboard from "./Main/MainDashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/Sign/authSlice";
import { fetchTodos } from "../../features/Dashboard/dashboardSlice";
import { AppDispatch } from "../../app/store";

export default function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
      dispatch(fetchTodos(JSON.parse(storedUser)));
    }
  }, []);

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
