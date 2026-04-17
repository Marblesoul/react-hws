import type { MessageItemProps } from '../types';

const Message = ({ from, message }: MessageItemProps) => (
  <li>
    <div className="message-data">
      <span className="message-data-name">
        <i className="fa fa-circle online" /> {from.name}
      </span>
      <span className="message-data-time">{message.time}</span>
    </div>
    <div className="message my-message">{message.text}</div>
  </li>
);

export default Message;
