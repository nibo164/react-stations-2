import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx";
import ThreadList from "./ThreadList.jsx";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
