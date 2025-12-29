
/**
 * chatHeader.component.tsx
 * Cabeçalho do chat exibindo informações do contato ativo.
 */
import React from 'react';

interface ChatHeaderProps {
  contactName: string;
  isOnline: boolean;
  avatar: string;
  onBack: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const ChatHeaderComponent: React.FC<ChatHeaderProps> = ({ 
  contactName, 
  isOnline, 
  avatar, 
  onBack,
  toggleTheme,
  isDarkMode
}) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="md:hidden p-2 -ml-2 text-slate-600 dark:text-slate-400">
          <i className="fa-solid fa-chevron-left text-lg"></i>
        </button>
        <div className="relative">
          <img src={avatar} alt={contactName} className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700" />
          {isOnline && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>}
        </div>
        <div>
          <h1 className="font-bold text-sm md:text-base dark:text-white leading-tight">{contactName}</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">{isOnline ? 'Online' : 'Visto por último recentemente'}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Alternar Tema"
        >
          <i className={`fa-solid ${isDarkMode ? 'fa-sun text-yellow-500' : 'fa-moon text-slate-600'}`}></i>
        </button>
        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <i className="fa-solid fa-video text-slate-600 dark:text-slate-400"></i>
        </button>
        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <i className="fa-solid fa-ellipsis-vertical text-slate-600 dark:text-slate-400"></i>
        </button>
      </div>
    </header>
  );
};
