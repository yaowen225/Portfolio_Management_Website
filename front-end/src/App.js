import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Introduction from './pages/Introduction';
import IntroductionCards from './pages/IntroductionCards';
import IntroductionFlow from './pages/IntroductionFlow';
import IntroductionTabs from './pages/IntroductionTabs';
import IntroductionBento from './pages/IntroductionBento';
import StockGraph from './pages/StockRelationGraph';
import TradingStrategy from './pages/TradingStrategy';
import Settings from './pages/Settings';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/introduction-cards" element={<IntroductionCards />} />
          <Route path="/introduction-flow" element={<IntroductionFlow />} />
          <Route path="/introduction-tabs" element={<IntroductionTabs />} />
          <Route path="/introduction-bento" element={<IntroductionBento />} />
          <Route path="/stock-graph" element={<StockGraph />} />
          <Route path="/trading-strategy" element={<TradingStrategy />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
