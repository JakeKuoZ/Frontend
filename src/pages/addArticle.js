import React, { useState } from 'react';
import axios from 'axios';
import '../styles/addArticle.css'; // Import CSS for better styling
import HomeButton from './HomeButton';
const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('tags', tags);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.post('/api/articles', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (response.status === 201) {
                setMessage('Article added successfully!');
                setTitle('');
                setContent('');
                setTags('');
                setImage(null);
            }
        } catch (error) {
            console.error('Failed to add the article.', error);
            setMessage('Failed to add the article.');
        }
    };

    return (
        <div className="add-article-container">
            <h1>Add New Article</h1>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} className="add-article-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="tags">Tags (comma-separated)</label>
                    <input
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Upload Image (optional)</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>

                <button type="submit" className="submit-button">
                    Add Article
                </button>
            </form>
            <HomeButton />
        </div>
    );
};

export default AddArticle;