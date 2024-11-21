import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { BulletPoint } from '../components/BulletPoint';

export function TheseusPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        The Ship of Theseus Resolution
      </motion.h1>

      <Section title="1. The Paradox">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Question of identity through component replacement
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Parallel to cellular renewal in organisms
          </BulletPoint>
        </ul>
      </Section>

      <Section title="2. Mitochondrial Continuity">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Maternal inheritance across generations
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Ancient bacterial origins
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Energy flow maintaining identity
          </BulletPoint>
        </ul>
      </Section>

      <Section title="3. Identity Resolution">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Cellular renewal vs mitochondrial stability
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Memory and developmental continuity
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Bridge across biological time
          </BulletPoint>
        </ul>
      </Section>

      <Section title="4. Philosophical Implications">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Dynamic nature of identity
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Integration of personal and collective
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Unity maintained through change
          </BulletPoint>
        </ul>
      </Section>
    </div>
  );
}