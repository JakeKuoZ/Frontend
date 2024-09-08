import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import AddArticle from './pages/addArticle'; // Import AddArticle component
import ArticleList from './components/ArticleList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/articles/:id" element={<ArticlePage />} />
                    <Route path="/add-article" element={<AddArticle />} /> {/* Add new route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;