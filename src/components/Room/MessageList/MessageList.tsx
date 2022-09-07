import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

export default function MessageList({ log, messages, removeMessage }: any) {
  // иммутабельная ссылка на элемент для отображения системных сообщений
  const logRef = useRef<any>();
  // иммутабельная ссылка на конец списка сообщений
  const bottomRef = useRef<any>();

  // выполняем прокрутку к концу списка при добавлении нового сообщения
  // это может стать проблемой при большом количестве пользователей,
  // когда участники чата не будут успевать читать сообщения
  useEffect(() => {
    bottomRef.current !== undefined
      ? bottomRef.current.scrollIntoView({
          behavior: 'smooth',
        })
      : console.log('q');
  }, [messages]);

  // отображаем и скрываем системные сообщения
  useEffect(() => {
    if (log) {
      logRef.current !== undefined
        ? (logRef.current.style.opacity = 0.8)
        : console.log('q');
      logRef.current !== undefined
        ? (logRef.current.style.zIndex = 1)
        : console.log('q');

      const timerId = setTimeout(() => {
        logRef.current !== undefined
          ? (logRef.current.style.opacity = 0)
          : console.log('q');
        logRef.current !== undefined
          ? (logRef.current.style.zIndex = -1)
          : console.log('q');

        clearTimeout(timerId);
      }, 1500);
    }
  }, [log]);

  return (
    <div className="container message">
      <h2>Messages</h2>
      <ul className="list message">
        {messages.map((message: any) => (
          <MessageItem
            key={message.messageId}
            message={message}
            removeMessage={removeMessage}
          />
        ))}

        <p ref={bottomRef}></p>

        <p ref={logRef} className="log">
          {log}
        </p>
      </ul>
    </div>
  );
}
