import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx";
import ThreadList from "./ThreadList.jsx";
import MakeThreadMenu from "./MakeThreadMenu.jsx";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/threads/new" element={<MakeThreadMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
