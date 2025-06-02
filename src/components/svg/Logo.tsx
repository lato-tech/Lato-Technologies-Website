import React from 'react';
export function Logo({
  className = 'w-8 h-8'
}: {
  className?: string;
}) {
  return <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L4 8V24L16 30L28 24V8L16 2Z" className="stroke-orange-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 13C10 11.3431 11.3431 10 13 10H19C20.6569 10 22 11.3431 22 13V19C22 20.6569 20.6569 22 19 22H13C11.3431 22 10 20.6569 10 19V13Z" className="fill-orange-500" />
      <path d="M13 14H19M13 18H19" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>;
}