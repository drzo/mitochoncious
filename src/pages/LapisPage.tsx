import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { BulletPoint } from '../components/BulletPoint';

export function LapisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        The Living Philosopher's Stone
      </motion.h1>

      <Section title="1. The Lapis Archetype">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Symbol of wholeness and transformation
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Connection to eternal life and vitality
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Divine essence within matter
          </BulletPoint>
        </ul>
      </Section>

      <Section title="2. Training the Living Stone">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Adaptation through cellular demands
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Response to lifestyle and practice
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Transformation of energy states
          </BulletPoint>
        </ul>
      </Section>

      <Section title="3. First Choir Connection">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Conduits of divine energy in cells
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Maintainers of sacred architecture
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Harmony and divine order
          </BulletPoint>
        </ul>
      </Section>

      <Section title="4. Archetypal Integration">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Ancient and universal presence
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Process of cellular individuation
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Balance of opposing forces
          </BulletPoint>
        </ul>
      </Section>
    </div>
  );
}