import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/ArticleList.css'; // Import custom styles
import HomeButton from '../pages/HomeButton';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="article-list-container">
            <h2 className="article-list-heading">All Articles</h2>
            <HomeButton />
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search articles by title or tag..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />

            {filteredArticles.length === 0 ? (
                <p>No articles found</p>
            ) : (
                <ul className="article-list">
                    {filteredArticles.map((article) => (
                        <li key={article._id} className="article-item">
                            <Link to={`/articles/${article._id}`} className="article-link">
                                <h3 className="article-title">{article.title}</h3>
                                <p className="article-excerpt">
                                    {article.content.substring(0, 100)}...
                                </p>
                                <p className="article-tags">
                                    <strong>Tags:</strong> {article.tags.join(', ')}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArticleList;