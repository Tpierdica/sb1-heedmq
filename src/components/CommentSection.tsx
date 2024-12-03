import React, { useState } from 'react';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { theme } from '../styles/theme';
import { FeedbackForm } from './feedback/FeedbackForm';
import { FeedbackList } from './feedback/FeedbackList';

export function CommentSection() {
  const [isSectionExpanded, setIsSectionExpanded] = useState(true);
  const [isFeedbackExpanded, setIsFeedbackExpanded] = useState(false);

  return (
    <div 
      id="feedback-section"
      className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20" 
      style={{ background: theme.colors.tiles.gradient1 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MessageSquare className="w-6 h-6 text-primary mr-2" />
          <h2 className="text-2xl font-bold text-primary">Feedback & Suggestions</h2>
        </div>
        <button
          onClick={() => setIsSectionExpanded(!isSectionExpanded)}
          className="text-[#ff69b4] hover:bg-[#ff69b4]/10 rounded-full p-1 transition-colors"
          aria-label={isSectionExpanded ? "Collapse section" : "Expand section"}
        >
          {isSectionExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>
      </div>

      {isSectionExpanded && (
        <>
          <FeedbackForm />
          
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-600">Recent Feedback</h3>
            <button
              onClick={() => setIsFeedbackExpanded(!isFeedbackExpanded)}
              className="text-[#ff69b4] hover:bg-[#ff69b4]/10 rounded-full p-1 transition-colors"
              aria-label={isFeedbackExpanded ? "Collapse feedback" : "Expand feedback"}
            >
              {isFeedbackExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {isFeedbackExpanded && <FeedbackList />}
        </>
      )}
    </div>
  );
}