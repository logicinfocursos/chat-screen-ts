
/**
 * sidebar.component.tsx
 * Lista lateral de conversas (contatos).
 */
import React from 'react';

interface SidebarProps {
  contacts: any[];
  activeContactId: number;
  onSelectContact: (id: number) => void;
  isHiddenOnMobile: boolean;
}

export const SidebarComponent: React.FC<SidebarProps> = ({ 
  contacts, 
  activeContactId, 
  onSelectContact,
  isHiddenOnMobile
}) => {
  return (
    <aside className={`${isHiddenOnMobile ? 'hidden md:flex' : 'flex'} w-full md:w-80 lg:w-96 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-full`}>
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold dark:text-white mb-4">Conversas</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Pesquisar contatos..." 
            className="w-full py-2 pl-10 pr-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm outline-none dark:text-white border-none focus:ring-2 focus:ring-blue-500"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div 
            key={contact.id}
            onClick={() => onSelectContact(contact.id)}
            className={`flex items-center gap-4 p-4 cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 border-b border-slate-50 dark:border-slate-800 ${
              activeContactId === contact.id ? 'bg-slate-100 dark:bg-slate-800' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
              {contact.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="font-semibold text-sm dark:text-white truncate">{contact.name}</h3>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">{contact.time}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{contact.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
      
      <nav className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center">
        <button className="text-blue-500 flex flex-col items-center gap-1">
          <i className="fa-solid fa-message"></i>
          <span className="text-[10px] font-bold">Chats</span>
        </button>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex flex-col items-center gap-1">
          <i className="fa-solid fa-phone"></i>
          <span className="text-[10px]">Chamadas</span>
        </button>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex flex-col items-center gap-1">
          <i className="fa-solid fa-circle-notch"></i>
          <span className="text-[10px]">Status</span>
        </button>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex flex-col items-center gap-1">
          <i className="fa-solid fa-gear"></i>
          <span className="text-[10px]">Config</span>
        </button>
      </nav>
    </aside>
  );
};
