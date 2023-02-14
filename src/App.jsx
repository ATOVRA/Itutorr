import "./App.css";
import Main from "./components/Main";

// css

import "./App.css";
import "../src/components/css/Home.css";
import "./components/css/TeacherAndStudents.css";
import "./components/css/Fillter.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilPage } from "./components/Profil Pages/Profil/ProfilPage";
import { MyChat } from "./components/Profil Pages/ProfileMyChat/MyChat";
import { MyCalendar } from "./components/Profil Pages/MyCalendar/MyCalendar";
import { Balance } from "./components/Profil Pages/MyBalance/Balance";
import { PaidServices } from "./components/Profil Pages/PaidServices/PaidServices";
import { TransactionsPage } from "./components/Profil Pages/TransactionsPage/TransactionsPage";
import { Reviews } from "./components/Profil Pages/Reviews/Reviews";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/my-chat" element={<MyChat />} />
          <Route path="/my-calendar" element={<MyCalendar />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/paid-services" element={<PaidServices />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
