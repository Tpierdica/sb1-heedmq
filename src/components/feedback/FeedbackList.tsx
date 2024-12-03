import React, { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { useComments } from '../../hooks/useComments';
import { exportToExcel } from '../../utils/excel';
import { FeedbackCard } from './FeedbackCard';

const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_COUNT = 12;

export function FeedbackList() {
  const { comments, addReply } = useComments();
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const handleExport = () => {
    exportToExcel(comments);
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + LOAD_MORE_COUNT);
  };

  if (comments.length === 0) {
    return (
      <div className="text-center text-primary/60 py-4">
        No feedback yet. Be the first to share your thoughts!
      </div>
    );
  }

  const visibleComments = comments.slice(0, displayCount);
  const hasMoreComments = comments.length > displayCount;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={handleExport}
          className="flex items-center px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Export to Excel
        </button>
      </div>

      <div className="space-y-4">
        {visibleComments.map((comment) => (
          <FeedbackCard
            key={comment.id}
            comment={comment}
            onReply={addReply}
          />
        ))}
      </div>

      {hasMoreComments && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex items-center px-6 py-2 text-primary hover:text-primary-dark transition-colors"
          >
            <ChevronDown className="w-5 h-5 mr-2" />
            Show More
          </button>
        </div>
      )}
    </div>
  );
}