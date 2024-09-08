import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import home page styles
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                <header className="home-header">
                    <h1>Welcome to the Knowledge Base</h1>
                    <p>Your source for articles, guides, and helpful resources.</p>
                    <Link to="/articles" className="home-button">Explore Articles</Link>
                    <Link to="/add-article" className="home-button secondary">Create New Article</Link>
                </header>

                <section className="home-section">
                    <h2>Latest Articles</h2>
                    <p>Stay updated with the newest articles added to the knowledge base.</p>
                    <Link to="/articles" className="home-link">View All Articles</Link>
                </section>
            </div>
        </div>
    );
};

export default Home;