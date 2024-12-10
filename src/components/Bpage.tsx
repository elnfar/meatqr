'use client';

import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

export function Bpage({ children }: PageProps) {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-20 flex-shrink-0">
      {children}
    </div>
  );
}