import { utils, writeFile } from 'xlsx';

interface Comment {
  id: string;
  text: string;
  username: string;
  timestamp: number;
  referenceNumber: string;
}

export function exportToExcel(comments: Comment[]) {
  const data = comments.map(comment => ({
    'Reference Number': comment.referenceNumber,
    'Username': comment.username,
    'Feedback': comment.text,
    'Date': new Date(comment.timestamp).toLocaleDateString(),
    'Time': new Date(comment.timestamp).toLocaleTimeString()
  }));

  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'Feedback');

  // Generate filename with current date
  const date = new Date().toISOString().split('T')[0];
  const filename = `petpals_feedback_${date}.xlsx`;

  writeFile(wb, filename);
}