
/**
 * chatBubble.component.tsx
 * Bolha de mensagem individual.
 */
import React from 'react';
import { FormatTimeUtil } from '../utils/formatTime.util';

interface ChatBubbleProps {
  message: { id: number; senderId: string; text: string; time: string };
}

export const ChatBubbleComponent: React.FC<ChatBubbleProps> = ({ message }) => {
  const isMe = message.senderId === 'me';
  
  return (
    <div className={`flex w-full mb-4 ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] md:max-w-[70%] p-3 rounded-2xl shadow-sm ${
        isMe 
          ? 'bg-blue-600 text-white rounded-tr-none' 
          : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
      }`}>
        <p className="text-sm md:text-base leading-relaxed break-words">{message.text}</p>
        <div className={`text-[10px] mt-1 text-right ${isMe ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
          {FormatTimeUtil(message.time)}
          {isMe && <i className="fa-solid fa-check-double ml-1 text-[8px]"></i>}
        </div>
      </div>
    </div>
  );
};
