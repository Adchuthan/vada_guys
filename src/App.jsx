import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import TeamMember from './pages/TeamMember/TeamMember';
import Personalities from './pages/Personalities/Personalities';
import Skills from './pages/Skills/Skills';
import Journey from './pages/Journey/Journey';
import Memories from './pages/Memories/Memories';
import Wall from './pages/Wall/Wall';
import Contact from './pages/Contact/Contact';
import ComingSoon from './components/ComingSoon/ComingSoon';

function App() {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:memberId" element={<TeamMember />} />
          <Route path="/personalities" element={<Personalities />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/wall" element={<Wall />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ComingSoon title="Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
