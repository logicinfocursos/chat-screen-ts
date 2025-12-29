
/**
 * chatPage.tsx
 * Página principal do chat unificando componentes.
 */
import React, { useState, useEffect, useRef } from 'react';
import { SidebarComponent } from '../../../components/sidebar.component';
import { ChatHeaderComponent } from '../../../components/chatHeader.component';
import { ChatBubbleComponent } from '../../../components/chatBubble.component';
import { ChatInputComponent } from '../../../components/chatInput.component';
import { ContactsData, MessagesData } from '../../../data/chatMock.data';
import { ScrollDownUtil } from '../../../utils/scrollDown.util';
import { AppConfig } from '../../../configurations/appConfig.config';

interface ChatPageProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export default function ChatPage({ toggleTheme, isDarkMode }: ChatPageProps) {
  const [activeContactId, setActiveContactId] = useState(1);
  const [messages, setMessages] = useState(MessagesData);
  const [showSidebar, setShowSidebar] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeContact = ContactsData.find(c => c.id === activeContactId) || ContactsData[0];

  useEffect(() => {
    ScrollDownUtil(scrollRef.current);
  }, [messages, activeContactId]);

  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: messages.length + 1,
      senderId: 'me',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);

    // Simulação de resposta da API ou n8n conforme AppConfig
    if (AppConfig.integrationType === 'mock') {
      setTimeout(() => {
        const responseMessage = {
          id: messages.length + 2,
          senderId: 'other',
          text: `Resposta automática via Integração Mock: "${text.substring(0, 20)}..."`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, responseMessage]);
      }, 1500);
    }
  };

  const handleSelectContact = (id: number) => {
    setActiveContactId(id);
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  const handleBack = () => {
    setShowSidebar(true);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Lista de Contatos */}
      <SidebarComponent 
        contacts={ContactsData} 
        activeContactId={activeContactId} 
        onSelectContact={handleSelectContact}
        isHiddenOnMobile={!showSidebar}
      />

      {/* Janela de Chat */}
      <main className={`${showSidebar ? 'hidden md:flex' : 'flex'} flex-1 flex-col bg-white dark:bg-slate-900 transition-colors duration-200`}>
        <ChatHeaderComponent 
          contactName={activeContact.name} 
          isOnline={activeContact.online} 
          avatar={activeContact.avatar} 
          onBack={handleBack}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
        
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-900/50 scroll-smooth"
        >
          <div className="flex flex-col">
            <div className="flex justify-center mb-6">
              <span className="text-[10px] md:text-xs bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full uppercase font-medium">Hoje</span>
            </div>
            {messages.map(msg => (
              <ChatBubbleComponent key={msg.id} message={msg} />
            ))}
          </div>
        </div>

        <ChatInputComponent onSendMessage={handleSendMessage} />
      </main>
    </div>
  );
}
