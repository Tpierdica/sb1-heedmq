export interface Comment {
  id: string;
  text: string;
  username: string;
  email?: string;
  timestamp: number;
  referenceNumber: string;
  replies?: AdminReply[];
}

export interface AdminReply {
  id: string;
  text: string;
  timestamp: number;
}