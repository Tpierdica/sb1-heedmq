import React, { useState } from 'react';
import { User, MessageSquare, Clock } from 'lucide-react';
import type { Comment } from '../../types/comment';
import { AdminReplyForm } from './AdminReplyForm';

interface FeedbackCardProps {
  comment: Comment;
  onReply: (commentId: string, text: string) => void;
}

export function FeedbackCard({ comment, onReply }: FeedbackCardProps) {
  const [isReplying, setIsReplying] = useState(false);
  const hasAdminReply = comment.replies && comment.replies.length > 0;

  const handleReply = (text: string) => {
    onReply(comment.id, text);
    setIsReplying(false);
  };

  return (
    <div className="w-full p-4 rounded-lg border border-primary/10 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-primary/60" />
          <span className="font-medium text-primary">{comment.username}</span>
        </div>
        <span className="text-xs text-primary/60">#{comment.referenceNumber}</span>
      </div>
      
      <p className="text-primary/80 mb-2">{comment.text}</p>
      
      <div className="flex justify-between items-center text-sm text-primary/60 mb-3">
        <span>{new Date(comment.timestamp).toLocaleDateString()}</span>
        <span>{new Date(comment.timestamp).toLocaleTimeString()}</span>
      </div>

      {hasAdminReply && comment.replies?.map((reply) => (
        <div key={reply.id} className="ml-4 mt-3 p-3 bg-blue-50/50 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="w-3 h-3 text-[#e83e8c]" />
            <span className="text-sm font-medium text-[#e83e8c]">Admin Reply</span>
          </div>
          <p className="text-sm text-primary/80 mb-1">{reply.text}</p>
          <div className="flex items-center text-xs text-primary/60">
            <Clock className="w-3 h-3 mr-1" />
            <span>{new Date(reply.timestamp).toLocaleString()}</span>
          </div>
        </div>
      ))}

      {!hasAdminReply && !isReplying && (
        <button
          onClick={() => setIsReplying(true)}
          className="mt-3 text-sm text-[#e83e8c] hover:text-[#e83e8c]/80 transition-colors"
        >
          Reply as Admin
        </button>
      )}

      {isReplying && (
        <AdminReplyForm
          onSubmit={handleReply}
          onCancel={() => setIsReplying(false)}
        />
      )}
    </div>
  );
}