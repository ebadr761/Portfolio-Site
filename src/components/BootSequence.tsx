import { useEffect, useState } from 'react';

interface BootSequenceProps {
  onComplete?: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bootSequence = [
    '> INITIALIZING SYSTEM...',
    '> LOADING MODULES: [STM32] [REACT] [AWS] [C++]',
    '> CHECKING PERIPHERALS... [OK]',
    '> MOUNTING FILE SYSTEMS... [OK]',
    '> STARTING SERVICES...',
    '  └─ UART INTERFACE... [READY]',
    '  └─ DMA CONTROLLER... [READY]',
    '  └─ INTERRUPT HANDLERS... [READY]',
    '> USER: EBAD UR REHMAN',
    '> ROLE: SOFTWARE ENGINEER',
    '> SPECIALIZATION: EMBEDDED SYSTEMS | FULL-STACK',
    '> STATUS: WORKING ON HOPLON (STARTUP)',
    '> SYSTEM ONLINE',
  ];

  useEffect(() => {
    if (currentIndex < bootSequence.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, bootSequence[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 150); // Delay between lines

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      const completeTimeout = setTimeout(onComplete, 500);
      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, bootSequence.length, onComplete]);

  return (
    <div className="font-mono text-sm md:text-base space-y-1">
      {lines.map((line, idx) => {
        const isStatus = line.includes('[OK]') || line.includes('[READY]');
        const isHeader = line.startsWith('> USER:') || line.startsWith('> ROLE:') || line.startsWith('> SPECIALIZATION:') || line.startsWith('> STATUS:');
        const isComplete = line.includes('SYSTEM ONLINE');

        return (
          <div
            key={idx}
            className={`${
              isStatus
                ? 'text-accentGreen'
                : isHeader
                ? 'text-accentBlue font-semibold'
                : isComplete
                ? 'text-accentOrange font-bold animate-pulse'
                : 'text-subtext'
            } animate-fade-in`}
          >
            {line}
            {idx === lines.length - 1 && !isComplete && (
              <span className="inline-block w-2 h-4 bg-accentBlue ml-1 animate-pulse">_</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
