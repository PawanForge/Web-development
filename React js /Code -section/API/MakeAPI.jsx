import { NavLink, Route, Routes } from "react-router-dom";
import Userlist from "./userlist";
import UserAdd from "./userAdd";
import UserEdit from "./UserEdit";

export default function MakeAPI() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">List</NavLink>
          <NavLink to="/add">Add</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit/>}/>
      </Routes>
    </div>
  );
}
