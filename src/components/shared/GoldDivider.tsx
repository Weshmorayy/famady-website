import React from 'react';

interface GoldDividerProps {
  className?: string;
}

export const GoldDivider = ({ className = '' }: GoldDividerProps) => {
  return (
    <div
      className={`h-[1px] w-[80px] bg-[var(--color-or-clair)] ${className}`}
      aria-hidden="true"
    />
  );
};
