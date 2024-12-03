import React, { useState } from 'react';
import { Mail, Hash, Copy, User } from 'lucide-react';
import { useComments } from '../../hooks/useComments';

type ContactMethod = 'online' | 'email';

export function FeedbackForm() {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [lastReferenceNumber, setLastReferenceNumber] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMethod, setContactMethod] = useState<ContactMethod>('online');
  const [email, setEmail] = useState('');
  const { addComment } = useComments();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!comment.trim()) {
      setError('Please enter your feedback');
      return;
    }

    if (contactMethod === 'email' && !email.trim()) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const referenceNumber = await addComment(comment, username, contactMethod === 'email' ? email : undefined);
      setLastReferenceNumber(referenceNumber);
      setComment('');
      setUsername('');
      setEmail('');
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyReference = () => {
    if (lastReferenceNumber) {
      navigator.clipboard.writeText(lastReferenceNumber);
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {lastReferenceNumber && (
          <div className="relative">
            <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/50" />
            <input
              type="text"
              value={lastReferenceNumber}
              readOnly
              className="w-full pl-10 pr-12 py-3 rounded-lg border border-primary/20 bg-white/80 backdrop-blur-sm text-primary focus:outline-none cursor-default"
            />
            <button
              type="button"
              onClick={handleCopyReference}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary/50 hover:text-primary transition-colors"
              title="Copy reference number"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/50" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name (required)"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary/20 bg-white/80 backdrop-blur-sm text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-primary">Contact Method</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="online"
                checked={contactMethod === 'online'}
                onChange={(e) => setContactMethod(e.target.value as ContactMethod)}
                className="mr-2"
              />
              <span className="text-primary/80">Online Form</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={contactMethod === 'email'}
                onChange={(e) => setContactMethod(e.target.value as ContactMethod)}
                className="mr-2"
              />
              <span className="text-primary/80">Email Request</span>
            </label>
          </div>
        </div>

        {contactMethod === 'email' && (
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/50" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary/20 bg-white/80 backdrop-blur-sm text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
              required={contactMethod === 'email'}
              disabled={isSubmitting}
            />
          </div>
        )}
        
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your feedback or suggestions..."
          className="w-full p-4 rounded-lg border border-primary/20 bg-white/80 backdrop-blur-sm text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[120px] resize-y"
          required
          disabled={isSubmitting}
        />

        <div className="flex items-start text-primary/70 bg-white/50 p-4 rounded-lg">
          <Mail className="w-5 h-5 mr-2 mt-0.5 shrink-0" />
          <p>
            For more detailed information or specific inquiries, please contact us at{' '}
            <strong className="font-bold text-[#ff748c]">
              PetPalsAE@gmail.com
            </strong>
            {' '}and quote your reference number
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}