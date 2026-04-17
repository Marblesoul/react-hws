import type { FC } from 'react';
import type { ChatMessage, MessageItemProps, MessageType } from '../types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

interface MessageHistoryProps {
  list?: ChatMessage[];
}

const renderers: Record<MessageType, FC<MessageItemProps>> = {
  message: Message,
  response: Response,
  typing: Typing,
};

const MessageHistory = ({ list = [] }: MessageHistoryProps) => {
  if (list.length === 0) return null;

  return (
    <ul>
      {list.map((item) => {
        const Renderer = renderers[item.type];
        return <Renderer key={item.id} from={item.from} message={item} />;
      })}
    </ul>
  );
};

export default MessageHistory;
