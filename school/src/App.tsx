import React from 'react';
import IndexPage from './pages/IndexPage';
import AboutPage from "./pages/AboutPage";
import DirectorsMessagePage from "./pages/DirectorsMessagePage";
import NurseryPrimary from "./pages/NurseryPrimary";
import CurriculumPage from "./pages/CurriculumPage";
import AdmissionPage from "./pages/AdmissionPage"
import GalleryPage from "./pages/GalleryPage";
import ParentFeedback from "./pages/ParentFeedback";
import {Routes, Route} from "react-router";

function App() {

  return (
      <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="directors-message" element={<DirectorsMessagePage/>}/>
          <Route path="nursery-primary" element={<NurseryPrimary/>}/>
          <Route path="curriculum" element={<CurriculumPage/>}/>
          <Route path="admission" element={<AdmissionPage/>}/>
          <Route path="gallery" element={<GalleryPage/>}/>
          <Route path="parent-feedback" element={<ParentFeedback/>}/>
      </Routes>

  );
}

export default App;
