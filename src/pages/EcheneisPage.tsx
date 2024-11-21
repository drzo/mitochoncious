import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { BulletPoint } from '../components/BulletPoint';

export function EcheneisPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        The Echeneis-Mitochondria Connection
      </motion.h1>

      <Section title="1. Echeneis as a Symbol">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Ancient power to halt mighty ships through subtle influence
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Control over movement and direction in marine ecosystems
          </BulletPoint>
        </ul>
      </Section>

      <Section title="2. Mitochondria as a Dual Symbol">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Energy production through cellular respiration
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Control over cell death through apoptosis regulation
          </BulletPoint>
        </ul>
      </Section>

      <Section title="3. Jung's Archetypal Context">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Representation of unconscious power within
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Symbol of transformation and adaptation
          </BulletPoint>
        </ul>
      </Section>

      <Section title="4. The Ship as Body Metaphor">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Ship represents human body/ego in life's waters
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Internal forces demanding attention and balance
          </BulletPoint>
        </ul>
      </Section>

      <Section title="5. Integration of Myth and Biology">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Parallel between mythological power and cellular influence
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Evolution from independence to symbiotic integration
          </BulletPoint>
        </ul>
      </Section>
    </div>
  );
}