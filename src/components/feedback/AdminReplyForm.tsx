import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface AdminReplyFormProps {
  onSubmit: (text: string) => void;
  onCancel: () => void;
}

export function AdminReplyForm({ onSubmit, onCancel }: AdminReplyFormProps) {
  const [replyText, setReplyText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyText.trim()) {
      onSubmit(replyText);
      setReplyText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <textarea
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="Type your reply..."
        className="w-full p-3 rounded-lg border border-primary/20 bg-white/80 backdrop-blur-sm text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[80px] resize-y text-sm"
        required
      />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex items-center px-4 py-1.5 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Send className="w-4 h-4 mr-2" />
          Reply
        </button>
      </div>
    </form>
  );
}