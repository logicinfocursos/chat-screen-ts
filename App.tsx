
/**
 * App.tsx
 * Componente principal que gerencia o estado global (tema) e rotas.
 */
import React, { useState, useEffect } from 'react';
import ChatPage from './app/(public)/chat/page';
import { ThemeConfig } from './configurations/theme.config';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Embora solicitado Next.js, simulamos a estrutura em um SPA React.
  // Centralizamos as cores conforme solicitado.
  const themeVars = isDarkMode ? ThemeConfig.dark : ThemeConfig.light;

  return (
    <div style={{ 
      color: themeVars.text,
      backgroundColor: themeVars.background 
    }} className="min-h-screen font-sans antialiased">
      <ChatPage toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
