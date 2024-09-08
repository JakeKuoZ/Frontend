import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/ArticlePage.css'; // Import CSS for styling
import HomeButton from './HomeButton';

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/articles/${id}`);
                setArticle(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching the article:', err);
                setError('Failed to load the article.');
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="article-page-container">
            {article ? (
                <>
                    <h1 className="article-title">{article.title}</h1>
                    {article.image && (
                        <img
                            src={`/api/articles/images/${article.image}`}
                            alt={article.title}
                            className="article-image"
                        />
                    )}
                    <div className="article-content">
                        <p>{article.content}</p>
                    </div>
                    <div className="article-meta">
                        <p><strong>Tags:</strong> {article.tags.join(', ')}</p>
                        <p><em>Published on: {new Date(article.createdAt).toLocaleDateString()}</em></p>
                    </div>
                    <HomeButton />
                </>
            ) : (
                <p>No article found.</p>
            )}
        </div>
    );
};

export default ArticlePage;