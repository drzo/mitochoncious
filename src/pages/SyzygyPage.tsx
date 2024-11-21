import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { BulletPoint } from '../components/BulletPoint';

export function SyzygyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-gray-900 mb-8"
      >
        The Mitochondrial Syzygy: Embodied Collective Unconscious
      </motion.h1>

      <Section title="1. The Living Collective Unconscious">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Mitochondrial DNA as repository of ancestral memory
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Cellular patterns reflecting archetypal wisdom
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Biological foundation of shared psychic structures
          </BulletPoint>
        </ul>
      </Section>

      <Section title="2. Triple Archetypal Expression">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Echeneis: Hidden power of collective energy systems
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Lapis: Universal transmutation of consciousness
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Theseus: Continuity of collective identity
          </BulletPoint>
        </ul>
      </Section>

      <Section title="3. Biological-Psychic Integration">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Cellular memory as foundation of archetypal patterns
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Mitochondrial networks as collective neural pathways
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Energy systems bridging matter and psyche
          </BulletPoint>
        </ul>
      </Section>

      <Section title="4. The Living Paradox">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Individual cells carrying collective wisdom
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Ancient knowledge expressed through present function
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Unity of personal and transpersonal experience
          </BulletPoint>
        </ul>
      </Section>

      <Section title="5. Practical Applications">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Accessing collective wisdom through cellular awareness
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Practices for awakening mitochondrial intelligence
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Integration of biological and psychological healing
          </BulletPoint>
        </ul>
      </Section>

      <Section title="6. Future Implications">
        <ul className="space-y-2">
          <BulletPoint delay={0.1}>
            Research into cellular basis of consciousness
          </BulletPoint>
          <BulletPoint delay={0.2}>
            Development of bio-psychic healing modalities
          </BulletPoint>
          <BulletPoint delay={0.3}>
            Evolution of collective cellular consciousness
          </BulletPoint>
        </ul>
      </Section>
    </div>
  );
}