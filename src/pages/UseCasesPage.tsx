import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { BulletPoint } from '../components/BulletPoint';

interface Conversation {
  speaker: 'mitochondria' | 'bio-bolt';
  message: string;
  timestamp: number;
}

export function UseCasesPage() {
  const [conversations, setConversations] = React.useState<Conversation[]>([
    {
      speaker: 'mitochondria',
      message: "Need a new protein for enhanced ATP synthesis...",
      timestamp: Date.now() - 3000
    },
    {
      speaker: 'bio-bolt',
      message: "I can help design that. What specific requirements do you have?",
      timestamp: Date.now() - 2000
    }
  ]);

  const [prompt, setPrompt] = React.useState('');

  const addMessage = () => {
    if (!prompt.trim()) return;

    const newMessage: Conversation = {
      speaker: 'bio-bolt',
      message: `Generating protein design for: ${prompt}`,
      timestamp: Date.now()
    };

    setConversations(prev => [...prev, newMessage]);
    setPrompt('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        Bio-Bolt: Protein Engineering Assistant
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Mitochondria</h2>
          <div className="relative">
            <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-16 h-16 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z"/>
              </svg>
            </div>
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Bio-Bolt</h2>
          <div className="relative">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/>
              </svg>
            </div>
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-3 rounded-lg shadow-md max-w-xs">
                <p className="text-sm text-gray-700">What do you want to build? Prompt, run, edit, and deploy full-stack proteins.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Section title="Interactive Console">
        <div className="bg-gray-900 rounded-lg p-6 mb-4 text-green-400 font-mono text-sm h-64 overflow-y-auto">
          {conversations.map((conv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="text-gray-500">
                {new Date(conv.timestamp).toLocaleTimeString()} - {conv.speaker}:
              </div>
              <div className={conv.speaker === 'mitochondria' ? 'text-purple-400' : 'text-blue-400'}>
                {conv.message}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your protein engineering prompt..."
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </Section>

      <Section title="Use Cases">
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-600">Enhanced ATP Synthesis</h3>
            <p className="text-gray-600 mt-2">Design proteins to optimize energy production in cellular systems.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-600">Membrane Transport</h3>
            <p className="text-gray-600 mt-2">Create efficient transport proteins for specific molecules.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-600">Signal Transduction</h3>
            <p className="text-gray-600 mt-2">Engineer proteins for improved cellular communication.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-600">Stress Response</h3>
            <p className="text-gray-600 mt-2">Develop proteins for enhanced cellular resilience.</p>
          </motion.div>
        </div>
      </Section>

      <Section title="Development Pipeline">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            AI-powered protein structure prediction
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Molecular dynamics simulation
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Function optimization through machine learning
          </BulletPoint>
          <BulletPoint delay={0.4}>
            Automated testing and validation
          </BulletPoint>
        </ul>
      </Section>
    </div>
  );
}