import "./App.css";
import Main from "./components/Main";

// css

import "./App.css";
import "../src/components/css/Home.css";
import "./components/css/TeacherAndStudents.css";
import "./components/css/Fillter.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilPage } from "./components/Profil Pages/Profil/ProfilPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Main/>}/>
          <Route path="/profile" element={<ProfilPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
