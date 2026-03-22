import React from 'react';
import { Routes, Route } from 'react-router-dom';  // ✅ 不要导入 BrowserRouter
import Home from './pages/Home';
import Intro from './pages/Intro';
import Components from './pages/Components';
import History from './pages/History';
import ManageTeam from './pages/ManageTeam';
import BoardMember from './pages/BoardMember';
import Comite from './pages/Comite';
import Plot from './pages/Plot';
import DiviDendos from './pages/DiviDendos';
import Analistas from './pages/Analistas';
import Social from './pages/Social';


const App = () => {
  return (
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/corporativa/historia" element={<History />} />
        <Route path="/gobierno/equipo-directivo" element={<ManageTeam />} />
        <Route path="/corporativa/perfil" element={<Intro />} />
        <Route path="/components" element={<Components />} />
        <Route path="/gobierno/consejo" element={<BoardMember />} />
        <Route path="/gobierno/comites" element={<Comite />} />
        <Route path="/accion/grafica-historica" element={<Plot />} />
        <Route path="/accion/precios-historicos" element={<DiviDendos />} />
        <Route path="/accion/analistas" element={<Analistas />} />
        <Route path="/responsabilidad-social" element={<Social />} />


      </Routes>
  );
};

export default App;