import { useState, useEffect } from 'react';
import type { Comment, AdminReply } from '../types/comment';
import { sendFeedbackEmail } from '../services/email';

const STORAGE_KEY = 'petpals_comments';

function generateReferenceNumber(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const sequence = String(Math.floor(Math.random() * 9999)).padStart(4, '0');
  
  return `PetPal${year}${month}${day}${sequence}`;
}

export function useComments() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setComments(parsedData.comments || []);
    }
  }, []);

  const addComment = async (text: string, username: string, email?: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      text,
      username,
      email,
      timestamp: Date.now(),
      referenceNumber: generateReferenceNumber(),
      replies: []
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ comments: updatedComments }));

    // Send email notification
    await sendFeedbackEmail(newComment);

    return newComment.referenceNumber;
  };

  const addReply = (commentId: string, replyText: string) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        const newReply: AdminReply = {
          id: Date.now().toString(),
          text: replyText,
          timestamp: Date.now()
        };
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply]
        };
      }
      return comment;
    });

    setComments(updatedComments);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ comments: updatedComments }));
  };

  return {
    comments,
    addComment,
    addReply
  };
}