import { render, screen } from '@testing-library/react';
import PostComment from '.';
import Comment from '../../models/Comment';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByTestId('comment-form')).toBeInTheDocument(); 
    });

    it('Deve renderizar os comentários corretamente', () => {
        const comments = [
            new Comment(1, "Este é o primeiro comentário."),
            new Comment(2, "este é o segundo comentário.")
        ];
        render(<PostComment comments={comments} />);
        expect(screen.getByTestId('comment-1')).toBeInTheDocument(); 
        expect(screen.getByTestId('comment-2')).toBeInTheDocument();
    });
});
