import { useNavigate } from "react-router-dom";
import { api } from "../utils";

export default function MyAccount() {
  const navigate = useNavigate();

  api.get("/auth/my-account").then((res) => console.log(res));

  if (localStorage.getItem("data")) {
    console.log("Sudah");
  } else {
    navigate("/login");
  }
}
