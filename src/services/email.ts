import emailjs from '@emailjs/browser';
import type { Comment } from '../types/comment';

export async function sendFeedbackEmail(comment: Comment) {
  try {
    const templateParams = {
      to_email: 'tracey.pierdica.tp@gmail.com',
      from_email: 'tracey.pierdica.tp@gmail.com',
      subject: `PetPals Feedback ${comment.referenceNumber}`,
      username: comment.username,
      feedback: comment.text,
      reference_number: comment.referenceNumber,
      contact_email: comment.email || 'N/A',
      submission_date: new Date(comment.timestamp).toLocaleString()
    };

    const response = await emailjs.send(
      'service_rdq0zzl',
      'template_5tq6oed',
      templateParams,
      'TIyVqjXB2ntv3Bsd-'
    );

    if (response.status === 200) {
      return true;
    }
    throw new Error(`Failed to send email: ${response.text}`);
  } catch (error) {
    console.error('Error sending feedback email:', error);
    return false;
  }
}