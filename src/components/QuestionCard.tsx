import React from 'react';
import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: string;
  index: number;
}

export function QuestionCard({ question, index }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white p-6 rounded-lg shadow-md mb-4"
    >
      <h3 className="text-lg font-medium text-gray-900">Question {index + 1}</h3>
      <p className="mt-2 text-gray-600">{question}</p>
    </motion.div>
  );
}