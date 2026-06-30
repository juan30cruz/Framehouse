import { cn } from '../lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="10" 
      strokeLinecap="square" 
      strokeLinejoin="miter"
      className={cn("w-10 h-10", className)}
    >
      <path d="M 45 145 L 45 80 L 100 35 L 155 80 L 155 125 L 75 125 L 75 75 L 125 75 L 125 145 Z" />
    </svg>
  );
}
