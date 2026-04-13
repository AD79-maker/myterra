import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string | React.ReactNode;
}

const SectionHeader = ({ title, subtitle, description }: SectionHeaderProps) => (
  <div className="mb-16">
    <span className="text-sm font-bold tracking-widest uppercase mb-4 block text-accent">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-primary">{title}</h2>
    {description && <div className="text-lg max-w-2xl leading-relaxed text-gray-600">{description}</div>}
  </div>
);

export default SectionHeader;
