import React, { useState } from 'react';

interface UChicagoLogoProps {
  className?: string;
  variant?: 'full' | 'shield' | 'text' | 'image';
}

export function UChicagoLogo({ className = '', variant = 'image' }: UChicagoLogoProps) {
  const [imageError, setImageError] = useState(false);

  // If variant is 'image' and image hasn't failed, show the real logo
  if (variant === 'image' && !imageError) {
    return (
      <img
        src="/uchicago-logo.png"
        alt="University of Chicago Logo"
        className={className}
        onError={() => setImageError(true)}
        style={{ objectFit: 'contain' }}
      />
    );
  }

  if (variant === 'shield' || (variant === 'image' && imageError)) {
    return (
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Shield outline */}
        <path
          d="M50 5L10 25V55C10 85 50 110 50 110C50 110 90 85 90 55V25L50 5Z"
          fill="#800000"
          stroke="#800000"
          strokeWidth="2"
        />
        {/* Inner shield */}
        <path
          d="M50 15L20 30V55C20 78 50 98 50 98C50 98 80 78 80 55V30L50 15Z"
          fill="#5c0000"
        />
        {/* Phoenix/Book design */}
        <path
          d="M40 45H60V48H40V45Z M42 50H58V53H42V50Z M44 55H56V58H44V55Z"
          fill="#ffffff"
          opacity="0.9"
        />
        {/* Center emblem */}
        <circle cx="50" cy="60" r="8" fill="#ffffff" opacity="0.2" />
        <text
          x="50"
          y="65"
          fontSize="10"
          fill="#ffffff"
          textAnchor="middle"
          fontWeight="bold"
          fontFamily="serif"
        >
          U
        </text>
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <svg
        viewBox="0 0 300 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <text
          x="0"
          y="35"
          fontSize="28"
          fontWeight="bold"
          fill="currentColor"
          fontFamily="serif"
        >
          THE UNIVERSITY OF CHICAGO
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield */}
      <path
        d="M40 10L15 20V38C15 54 40 68 40 68C40 68 65 54 65 38V20L40 10Z"
        fill="#800000"
      />
      <path
        d="M40 16L22 23V38C22 50 40 61 40 61C40 61 58 50 58 38V23L40 16Z"
        fill="#5c0000"
      />
      <circle cx="40" cy="40" r="6" fill="#ffffff" opacity="0.3" />
      <text
        x="40"
        y="44"
        fontSize="8"
        fill="#ffffff"
        textAnchor="middle"
        fontWeight="bold"
        fontFamily="serif"
      >
        U
      </text>

      {/* Text */}
      <text
        x="80"
        y="35"
        fontSize="20"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="serif"
        letterSpacing="0.5"
      >
        THE UNIVERSITY
      </text>
      <text
        x="80"
        y="55"
        fontSize="20"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="serif"
        letterSpacing="0.5"
      >
        OF CHICAGO
      </text>
    </svg>
  );
}
