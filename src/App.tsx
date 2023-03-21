import { Route, Routes } from "react-router-dom";
import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import HomePage from "./Pages/HomePage";
import Technology from "./Pages/Technology";

export interface IAppProps {}

const App = (props: IAppProps) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
};
export default App;
