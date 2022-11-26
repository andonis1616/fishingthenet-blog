import Announcements from "../Announcements/Announcements";
import Header from "../Header/Header";
import { AppStyle } from "./App.style";
import AboutUs from "../AboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Bottom from "../Bottom/Bottom";
import Terms from "../Terms/Terms";
import Privacy from "../Privacy/Privacy";
import SingleAnnouncement from "../SingleAnnouncement/SingleAnnouncement";

function App() {
  const [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <AppStyle>
      <Header handleFilter={handleFilter}></Header>
      <Routes>
        <Route path="/" element={<Announcements filter={filter} />} />
        <Route
          path="/announcements"
          element={<Announcements filter={filter} />}
        />
        <Route path="/announcements/:id" element={<SingleAnnouncement />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      <Bottom></Bottom>
    </AppStyle>
  );
}

export default App;
