import { useState } from "react";

export function CommentsList() {
	const [comments, setComments] = useState([
		{ id: "1", text: "Это первый комментарий"},
		{ id: "2", text: "Это второй комментарий"},
		{ id: "3", text: "Это третий комментарий"}
	]);

    const [newComment, setNewComment] = useState("");

    const handleDelete = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, { id: Date.now().toString(), text: newComment }]);
            setNewComment("");
        }
    };

	return (
		<div>
        {comments.map((comment) => (
            <div key={comment.id}>
                <p>{comment.text}</p>
                <button onClick={() => handleDelete(comment.id)}>Удалить</button>
            </div>
        ))}
        <div>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Добавить новый комментарий"
                />
                <button onClick={handleAddComment}>Добавить</button>
            </div>
		</div>

	);
}

export default CommentsList;
