
/**
 * chatInput.component.tsx
 * Área de input para digitação e envio de mensagens.
 */
import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export const ChatInputComponent: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSend} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
      <button type="button" className="p-2 text-slate-500 hover:text-blue-500 transition-colors">
        <i className="fa-solid fa-circle-plus text-xl"></i>
      </button>
      <div className="flex-1 relative">
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Mensagem" 
          className="w-full py-2 px-4 pr-10 rounded-full bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white text-sm outline-none"
        />
        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          <i className="fa-regular fa-face-smile"></i>
        </button>
      </div>
      <button 
        type="submit" 
        disabled={!text.trim()}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
          text.trim() ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
        }`}
      >
        <i className="fa-solid fa-paper-plane text-sm"></i>
      </button>
    </form>
  );
};
