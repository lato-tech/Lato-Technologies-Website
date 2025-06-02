import React from 'react';
export function WebBasedIcon({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="48" height="36" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <path d="M16 16L48 16M16 24L48 24" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 32C35.3137 32 38 29.3137 38 26C38 22.6863 35.3137 20 32 20C28.6863 20 26 22.6863 26 26C26 29.3137 28.6863 32 32 32Z" className="stroke-orange-500" strokeWidth="2" />
      <path d="M24 36C24 34.3431 25.3431 33 27 33H37C38.6569 33 40 34.3431 40 36" className="stroke-orange-500" strokeWidth="2" />
      <path d="M20 52L32 44L44 52" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
    </svg>;
}
export function CrossPlatformIcon({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20H48M16 44H48" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      <rect x="12" y="12" width="16" height="16" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <rect x="36" y="12" width="16" height="16" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <rect x="12" y="36" width="16" height="16" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <rect x="36" y="36" width="16" height="16" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <path d="M28 32H36" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
    </svg>;
}
export function PayrollIcon({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="8" width="40" height="48" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <path d="M32 16V40M24 32H40" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 48H44" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="24" r="8" className="stroke-orange-500" strokeWidth="2" />
    </svg>;
}
export function ReportingIcon({
  className = 'w-16 h-16'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="48" height="48" rx="2" className="stroke-orange-500" strokeWidth="2" />
      <path d="M16 44L28 32L36 40L48 28" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 20H48M16 28H48M16 36H48" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
    </svg>;
}