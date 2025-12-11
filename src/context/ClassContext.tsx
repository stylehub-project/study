'use client';

import { createContext, useState, ReactNode } from 'react';
import type { GenerateClassInput, GenerateClassOutput } from '@/ai/flows/generate-class-flow';

export interface AIClass extends GenerateClassInput, GenerateClassOutput {
  id: string;
}

interface ClassContextType {
  classes: AIClass[];
  addClass: (newClass: AIClass) => void;
}

export const ClassContext = createContext<ClassContextType>({
  classes: [],
  addClass: () => {},
});

export const ClassProvider = ({ children }: { children: ReactNode }) => {
  const [classes, setClasses] = useState<AIClass[]>([]);

  const addClass = (newClass: AIClass) => {
    setClasses(prevClasses => [...prevClasses, newClass]);
  };

  return (
    <ClassContext.Provider value={{ classes, addClass }}>
      {children}
    </ClassContext.Provider>
  );
};
