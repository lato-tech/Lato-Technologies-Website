import React from 'react';
export function ModularityIcon({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="20" height="20" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <rect x="36" y="8" width="20" height="20" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <rect x="8" y="36" width="20" height="20" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <rect x="36" y="36" width="20" height="20" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <path d="M28 18H36M28 46H36M18 28V36M46 28V36" className="stroke-orange-500" strokeWidth="2" />
    </svg>;
}
export function OpenSourceIcon({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 16C24.268 16 18 22.268 18 30C18 35.463 21.027 40.193 25.5 42.577V48C25.5 49.381 26.619 50.5 28 50.5H36C37.381 50.5 38.5 49.381 38.5 48V42.577C42.973 40.193 46 35.463 46 30C46 22.268 39.732 16 32 16Z" className="stroke-orange-500" strokeWidth="2" />
      <path d="M32 38C35.866 38 39 34.866 39 31C39 27.134 35.866 24 32 24C28.134 24 25 27.134 25 31C25 34.866 28.134 38 32 38Z" className="fill-orange-500" />
    </svg>;
}
export function IndustryIcon({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 56V32L24 24V8L40 16V24L56 32V56H8Z" className="stroke-orange-500" strokeWidth="2" />
      <path d="M24 32H32M24 40H40M24 48H36" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
    </svg>;
}
export function ComparisonChart({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="40" width="8" height="16" className="fill-gray-500" />
      <rect x="24" y="32" width="8" height="24" className="fill-gray-500" />
      <rect x="40" y="16" width="8" height="40" className="fill-orange-500" />
      <path d="M8 8L56 8" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 56L56 56" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      <text x="10" y="36" className="fill-white text-xs">
        S
      </text>
      <text x="26" y="28" className="fill-white text-xs">
        D
      </text>
      <text x="42" y="12" className="fill-white text-xs">
        L
      </text>
    </svg>;
}
export function HMIScreenIcon({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="48" height="36" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <path d="M24 52H40" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 44V52" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      <rect x="12" y="12" width="40" height="28" rx="1" className="fill-orange-500/20" />
      <path d="M16 16H24V20H16V16ZM28 16H48V20H28V16ZM16 24H48V36H16V24Z" className="fill-orange-500" />
    </svg>;
}