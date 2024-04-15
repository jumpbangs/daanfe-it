import AppRoutes from './routes/AppRoutes';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
