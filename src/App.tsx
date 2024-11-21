import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './components/Section';
import { BulletPoint } from './components/BulletPoint';
import { QuestionCard } from './components/QuestionCard';
import { EcheneisPage } from './pages/EcheneisPage';
import { LapisPage } from './pages/LapisPage';
import { TheseusPage } from './pages/TheseusPage';
import { SyzygyPage } from './pages/SyzygyPage';
import { ProofOfConceptPage } from './pages/ProofOfConceptPage';
import { UseCasesPage } from './pages/UseCasesPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('overview');

  const renderPage = () => {
    switch (currentPage) {
      case 'echeneis':
        return <EcheneisPage />;
      case 'lapis':
        return <LapisPage />;
      case 'theseus':
        return <TheseusPage />;
      case 'syzygy':
        return <SyzygyPage />;
      case 'proof':
        return <ProofOfConceptPage />;
      case 'usecases':
        return <UseCasesPage />;
      default:
        return <OverviewPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <ul className="flex space-x-4">
            <li>
              <button 
                onClick={() => setCurrentPage('overview')}
                className={`px-4 py-2 rounded-md ${currentPage === 'overview' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Overview
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('echeneis')}
                className={`px-4 py-2 rounded-md ${currentPage === 'echeneis' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Echeneis
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('lapis')}
                className={`px-4 py-2 rounded-md ${currentPage === 'lapis' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Lapis
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('theseus')}
                className={`px-4 py-2 rounded-md ${currentPage === 'theseus' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Theseus
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('syzygy')}
                className={`px-4 py-2 rounded-md ${currentPage === 'syzygy' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Syzygy
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('proof')}
                className={`px-4 py-2 rounded-md ${currentPage === 'proof' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Proof of Concept
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('usecases')}
                className={`px-4 py-2 rounded-md ${currentPage === 'usecases' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Use Cases
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

function OverviewPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const questions = [
    "How do mitochondria embody the collective unconscious in cellular form?",
    "What role do mitochondrial networks play in collective consciousness?",
    "How does cellular memory reflect archetypal patterns?",
    "What emerges from the synthesis of biological and psychic dimensions?"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 mb-8 text-center"
      >
        Mitochondria: The Living Collective Unconscious
      </motion.h1>

      <Section title="Overview">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => onNavigate('echeneis')}
          >
            <h3 className="text-xl font-semibold mb-2">The Echeneis Connection</h3>
            <p className="text-gray-600">Hidden power in collective energy systems.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => onNavigate('lapis')}
          >
            <h3 className="text-xl font-semibold mb-2">The Living Philosopher's Stone</h3>
            <p className="text-gray-600">Universal patterns of cellular transformation.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => onNavigate('theseus')}
          >
            <h3 className="text-xl font-semibold mb-2">The Theseus Resolution</h3>
            <p className="text-gray-600">Continuity of collective cellular memory.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
            onClick={() => onNavigate('syzygy')}
          >
            <h3 className="text-xl font-semibold mb-2">The Mitochondrial Syzygy</h3>
            <p className="text-gray-600">Integration of biological and psychic dimensions.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer bg-gradient-to-br from-green-50 to-blue-50 border border-green-100"
            onClick={() => onNavigate('proof')}
          >
            <h3 className="text-xl font-semibold mb-2">Mitochondrial Language</h3>
            <p className="text-gray-600">Proof of concept interface for cellular communication.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer bg-gradient-to-br from-purple-50 to-green-50 border border-purple-100"
            onClick={() => onNavigate('usecases')}
          >
            <h3 className="text-xl font-semibold mb-2">Bio-Bolt Assistant</h3>
            <p className="text-gray-600">Interactive protein engineering interface.</p>
          </motion.div>
        </div>
      </Section>

      <Section title="Key Questions">
        <div className="space-y-4">
          {questions.map((question, index) => (
            <QuestionCard key={index} question={question} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default App;