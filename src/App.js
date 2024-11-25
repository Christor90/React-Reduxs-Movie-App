import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
