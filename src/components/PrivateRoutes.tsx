import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

export default function PrivateRoutes() {
  const { user } = useSelector((state: RootState) => state.auth);

  return user ? <Outlet /> : <Navigate to="/sign" />;
}
