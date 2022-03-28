import './App.css';
import { Routes, Route, Navigate, useLocation, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './components/Home';
import Skins from './components/Skins';
import Navbar from './components/Navbar';
const RouteTransition = () => { 
  const location = useLocation();
  return (
    
        <Routes location={location}>
          <Route path="/" element={
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="slide" timeout={200}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          } />
          <Route path="/skins" element={
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="slide" timeout={200}>
                <Skins />
              </CSSTransition>
            </TransitionGroup>
          } />
          <Route path="/skins.html" element={<Navigate to="/skins" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RouteTransition />
      </BrowserRouter>
    </div>
  );
}

export default App;

