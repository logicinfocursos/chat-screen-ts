
/**
 * scrollDown.util.ts
 * Utilitário para forçar o scroll para o final de um elemento.
 */
export const ScrollDownUtil = (element: HTMLElement | null): void => {
  if (element) {
    element.scrollTop = element.scrollHeight;
  }
};
