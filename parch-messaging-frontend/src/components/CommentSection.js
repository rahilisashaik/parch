import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ fileId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/comments/${fileId}`
                );
                setComments(response.data);
            } catch (error) {
                console.error("Failed to fetch comments:", error);
            }
        };

        fetchComments();
    }, [fileId]);

    const handleAddComment = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/comments/", {
                file: fileId,
                user: 1, // hardcoded user for now, replace with authenticated user later
                content: newComment,
            });
            setComments([...comments, response.data]);
            setNewComment("");
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    };

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.content}</li>
                ))}
            </ul>
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default CommentSection;
