import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`/api/articles/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching the article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            {article.image && (
                <img
                    src={`/api/articles/images/${article.image}`}
                    alt={article.title}
                    style={{ width: '400px' }}
                />
            )}
            <p><strong>Tags:</strong> {article.tags.join(', ')}</p>
        </div>
    );
};

export default Article;