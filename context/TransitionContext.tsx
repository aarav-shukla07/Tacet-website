"use client";

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface TransitionContextType {
  isTransitioning: boolean;
  setIsTransitioning: Dispatch<SetStateAction<boolean>>;
}

export const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  setIsTransitioning: () => {},
});

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
};
