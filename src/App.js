import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopFile from './components/TopFile';
import Footer from './components/Footer';
import Home from './pages/Home';
import CuisinePage from './pages/CuisinePage';
import AddRecipe from './pages/AddRecipe';
import RecipeDetail from './pages/RecipeDetail';
import Community from './pages/Community';
import Cart from './pages/Cart';
import Preferences from './pages/Preferences';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopFile />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:cuisine" element={<CuisinePage />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;