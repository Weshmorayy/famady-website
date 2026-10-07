import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ children, className = '' }: SectionLabelProps) => {
  return (
    <p
      className={`font-heading italic uppercase tracking-[0.25em] text-sm text-[var(--color-or-reflet)] ${className}`}
    >
      {children}
    </p>
  );
};
