import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HalamanTambahBaru from './pages/HalamanTambah';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import DetailHalaman from './pages/HalamanDetail';
import ArsipCatatan from './pages/Arsip';


function App() {
  const home = '/';
  const add = '/notes/new';
  const detail = '/notes/:id';
  const archives = '/archives';

  return (
    <div className="app-container">
      <header><h1><Link to="/">Catatanku</Link></h1><Navigation /></header>
      <main>
        <Routes>
          <Route path={home} element={<HomePage/>} />
          <Route path={add} element={<HalamanTambahBaru/>} />
          <Route path={detail} element={<DetailHalaman />} />
          <Route path={archives} element={<ArsipCatatan />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
