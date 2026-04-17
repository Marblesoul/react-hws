export interface User {
  name: string;
}

export type MessageType = 'response' | 'message' | 'typing';

export interface ChatMessage {
  id: string;
  from: User;
  type: MessageType;
  time: string;
  text?: string;
}

export interface MessageItemProps {
  from: User;
  message: ChatMessage;
}
