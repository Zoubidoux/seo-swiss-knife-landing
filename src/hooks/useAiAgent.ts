import { useState, useCallback } from 'react';

const API_BASE = 'https://api-three-orcin-86.vercel.app';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface UseAiAgentProps {
  mode?: 'beginner' | 'intermediate' | 'expert';
  lang?: string;
}

export function useAiAgent({ mode = 'intermediate', lang = 'en' }: UseAiAgentProps = {}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string, pageContext?: any) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: 'user', content };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // In a real landing page environment, we might not have a token.
      // We'll try to call the API. If it requires auth, we'll suggest a demo mode.
      const response = await fetch(`${API_BASE}/api/ai/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}` // This would be added if we had a mechanism for it
        },
        body: JSON.stringify({
          message: content,
          pageContext: pageContext || {
            url: window.location.href,
            title: document.title,
            // Minimal context for landing page demo
          },
          history: messages.map(m => ({ role: m.role, content: m.content })),
          mode,
          lang,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized: AI Agent requires a valid session. Try installing the extension!');
        }
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply || data.content || (typeof data === 'string' ? data : 'No response from agent.'),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('AI Agent Error:', err);
      setError(err.message || 'Failed to communicate with AI Agent.');
      
      // Fallback response for demo purposes if API fails
      const fallbackMessage: Message = {
        role: 'assistant',
        content: `[Demo Mode] I heard your request: "${content}". Currently, the live API requires an active extension session. In the full version, I would provide a detailed SEO audit of this page!`,
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, mode, lang]);

  const clearHistory = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    sendMessage,
    isLoading,
    error,
    clearHistory,
  };
}
