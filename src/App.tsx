import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Zakat from './pages/Zakat';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <div className="min-h-screen bg-dark-100">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/zakat" element={<Zakat />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;