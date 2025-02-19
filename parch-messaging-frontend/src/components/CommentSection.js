import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ fileId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/comments/`,
                    { params: { fileId } } 
                );
                setComments(response.data);
            } catch (error) {
                console.error("Failed to fetch comments:", error);
            }
        };

        if (fileId) {
            fetchComments(); 
        }
    }, [fileId]);

    const handleAddComment = async () => {
        if (!newComment.trim()) {
            alert("Comment cannot be empty.");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/comments/", {
                file: fileId, 
                user: 1, // Hardcoded user ID for now (replace with actual user later)
                content: newComment,
            });

            setNewComment("");
            setComments((prevComments) => [...prevComments, response.data]);
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    };

    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.length === 0 ? (
                    <p>No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map((comment) => (
                        <li key={comment.id}>{comment.content}</li>
                    ))
                )}
            </ul>
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleAddComment} disabled={!newComment.trim()}>
                Add Comment
            </button>
        </div>
    );
};

export default CommentSection;
