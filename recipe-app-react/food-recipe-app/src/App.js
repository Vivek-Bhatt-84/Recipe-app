import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Component/MainPage";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./Component/MealInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:mealid" element={<MealInfo />} />
    </Routes>
  );
}

export default App;
