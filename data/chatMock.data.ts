
/**
 * chatMock.data.ts
 * Dados fictícios para simular a lista de contatos e mensagens.
 */
export const ContactsData = [
  { id: 1, name: 'Alice Silva', avatar: 'https://picsum.photos/seed/alice/100', lastMessage: 'Olá, como você está?', time: '10:30', online: true },
  { id: 2, name: 'Beto Rocha', avatar: 'https://picsum.photos/seed/beto/100', lastMessage: 'O projeto está pronto.', time: 'Ontem', online: false },
  { id: 3, name: 'Carla Nunes', avatar: 'https://picsum.photos/seed/carla/100', lastMessage: 'Pode me enviar o n8n?', time: '21:15', online: true },
  { id: 4, name: 'Davi Mendes', avatar: 'https://picsum.photos/seed/davi/100', lastMessage: 'Beleza!', time: '09:00', online: false },
];

export const MessagesData = [
  { id: 1, senderId: 'other', text: 'Olá! Tudo bem?', time: '10:00' },
  { id: 2, senderId: 'me', text: 'Tudo ótimo por aqui, e com você?', time: '10:05' },
  { id: 3, senderId: 'other', text: 'Estou testando a nova interface do chat mobile-first.', time: '10:06' },
  { id: 4, senderId: 'me', text: 'Ficou muito boa! O modo escuro está excelente.', time: '10:10' },
  { id: 5, senderId: 'other', text: 'Concordo plenamente. Vamos integrar com o n8n depois?', time: '10:12' },
];
