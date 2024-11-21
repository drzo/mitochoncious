import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { BulletPoint } from '../components/BulletPoint';

interface SignalMessage {
  raw: string;
  translation: string;
  timestamp: number;
}

interface DictionaryEntry {
  signal: string;
  meaning: string;
  context: string;
}

export function ProofOfConceptPage() {
  const [messages, setMessages] = React.useState<SignalMessage[]>([
    {
      raw: "Ca2+ flux: +20mV → -60mV (oscillation)",
      translation: "Energy demand increasing in response to stress",
      timestamp: Date.now() - 3000
    },
    {
      raw: "ΔΨm shift: -120mV → -90mV",
      translation: "Initiating protective response, increasing ATP production",
      timestamp: Date.now() - 2000
    },
    {
      raw: "ROS burst: 2.5x baseline, Ca2+ wave propagating",
      translation: "Warning signal transmitted to neighboring mitochondria",
      timestamp: Date.now() - 1000
    }
  ]);

  const dictionary: DictionaryEntry[] = [
    {
      signal: "Ca2+ oscillation",
      meaning: "Information encoding",
      context: "Frequency and amplitude encode specific cellular messages"
    },
    {
      signal: "ΔΨm (membrane potential)",
      meaning: "Energy state",
      context: "More negative = higher energy capacity"
    },
    {
      signal: "ROS signals",
      meaning: "Stress response",
      context: "Controlled bursts act as emergency broadcasts"
    },
    {
      signal: "Proton gradient",
      meaning: "Power level",
      context: "Steeper gradient indicates higher available energy"
    },
    {
      signal: "Cytochrome c release",
      meaning: "Emergency shutdown",
      context: "Ultimate stress signal indicating apoptosis initiation"
    }
  ];

  const addMessage = () => {
    const newMessages: SignalMessage[] = [
      {
        raw: "Proton gradient: 60mV → 80mV, Ca2+ stable",
        translation: "Energy reserves building, homeostasis maintained",
        timestamp: Date.now()
      }
    ];
    setMessages(prev => [...prev, ...newMessages]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        Mitochondrial Language Interface
      </motion.h1>

      <Section title="Live Signal Translation">
        <div className="bg-gray-900 rounded-lg p-6 mb-8 text-green-400 font-mono text-sm">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="text-gray-500">#{(index + 1).toString().padStart(3, '0')} - {new Date(msg.timestamp).toLocaleTimeString()}</div>
              <div className="text-yellow-400">{msg.raw}</div>
              <div className="text-green-400 pl-4">Translated: {msg.translation}</div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={addMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Simulate New Signal
        </button>
      </Section>

      <Section title="Signal Dictionary">
        <div className="grid gap-4 md:grid-cols-2">
          {dictionary.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-blue-600">{entry.signal}</h3>
              <p className="text-gray-700 font-medium mt-2">{entry.meaning}</p>
              <p className="text-gray-600 text-sm mt-1">{entry.context}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Communication Patterns">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Membrane potential fluctuations indicate energy state changes
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Calcium waves propagate information through networks
          </BulletPoint>
          <BulletPoint delay={0.3}>
            ROS bursts serve as emergency broadcast signals
          </BulletPoint>
          <BulletPoint delay={0.4}>
            Proton gradients encode available power levels
          </BulletPoint>
        </ul>
      </Section>

      <Section title="Future Development">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Machine learning for pattern recognition in signal complexes
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Real-time monitoring of mitochondrial networks
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Development of therapeutic signal interventions
          </BulletPoint>
          <BulletPoint delay={0.4}>
            Integration with cellular consciousness research
          </BulletPoint>
        </ul>
      </Section>
    </div>
  );
}