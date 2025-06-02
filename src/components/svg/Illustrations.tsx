import React from 'react';
export function SecurityIllustration({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L12 16V36C12 45.941 20.59 55.183 32 58C43.41 55.183 52 45.941 52 36V16L32 8Z" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 32L30 38L40 28" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
}
export function AutomationIllustration({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 16V48M16 32H48M44 16L20 48M20 16L44 48" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="24" className="stroke-orange-500" strokeWidth="2" />
    </svg>;
}
export function InnovationIllustration({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 12V20M46.3 17.7L40.6 23.4M52 32H44M46.3 46.3L40.6 40.6M32 52V44M17.7 46.3L23.4 40.6M12 32H20M17.7 17.7L23.4 23.4" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="8" className="fill-orange-500" />
    </svg>;
}
export function FaceRecognitionIllustration({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="40" height="40" rx="4" className="stroke-orange-500" strokeWidth="2" />
      <circle cx="32" cy="28" r="8" className="stroke-orange-500" strokeWidth="2" />
      <path d="M20 44C20 38.477 25.373 34 32 34C38.627 34 44 38.477 44 44" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
    </svg>;
}