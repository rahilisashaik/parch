import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewerPage from "./pages/ViewerPage";

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewer/:streamId/:objectId" element={<ViewerPage />} />
        </Routes>
    </Router>
  );
};

export default App;
