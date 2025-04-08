import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/global/Header/Header';
import Navigation from './components/global/Navigation/Navigation';
import Calendar from './components/pages/Calendar/Calendar';
import Participants from './components/pages/Participants/Participants';
import Chat from './components/pages/Chat/Chat';
import Files from './components/pages/Files/Files';
import Gallery from './components/pages/Gallery/Gallery';
import { AppWrapper, MainContent } from './styles';

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Calendar selectedDay="all" setSelectedDay={() => {}} />} />
            <Route path="/agenda" element={<Calendar selectedDay="all" setSelectedDay={() => {}} />} />
            <Route path="/participants" element={<Participants />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/files" element={<Files />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </MainContent>
        <Navigation />
      </AppWrapper>
    </Router>
  );
};

export default App;