import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';
import Comment from '../../models/Comment';

interface PostCommentProps {
    comments?: Comment[];
}

const Post: React.FC<PostCommentProps> = ({ comments = [] }) => { 
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        comments.push(newComment); 
    }

    return (
        <div>
            <ul className={styles['post-comments']}>
                {comments.map(({ comment, id }) => (
                    <li className={styles['post-comment']} key={id} data-testid={`comment-${id}`}>
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']} data-testid={'comment-form'}>
                <textarea 
                    value={tempComment} 
                    onChange={e => setTempComment(e.target.value)} 
                    required 
                    className={styles['post-comments-form-textarea']} 
                />
                <button type="submit" className={styles['post-comments-form-button']}>
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default Post;
