'use client';

import { forwardRef } from 'react';

export const TechInput = forwardRef(({ className = '', hasLeftIcon = false, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`
        w-full ${hasLeftIcon ? 'pl-12' : 'px-4'} py-3 
        bg-white/80 dark:bg-slate-800/50 
        border border-cyan-500/40 dark:border-cyan-500/30 
        rounded-lg 
        text-gray-900 dark:text-gray-100 
        placeholder-gray-600 dark:placeholder-gray-500 
        backdrop-blur-sm
        focus:outline-none 
        focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 
        focus:border-cyan-500 
        transition-all duration-300 ease-in-out
        hover:border-cyan-500/60 hover:bg-white/90 dark:hover:border-cyan-400/50 dark:hover:bg-slate-800/60
        ${className}
      `}
      {...props}
    />
  );
});

TechInput.displayName = 'TechInput';

export const TechSelect = forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`
        w-full px-4 py-3 
        bg-white/80 dark:bg-slate-800/50 
        border border-cyan-500/40 dark:border-cyan-500/30 
        rounded-lg 
        text-gray-900 dark:text-gray-100 
        backdrop-blur-sm
        focus:outline-none 
        focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 
        focus:border-cyan-500 
        transition-all duration-300 ease-in-out
        hover:border-cyan-500/60 hover:bg-white/90 dark:hover:border-cyan-400/50 dark:hover:bg-slate-800/60
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  );
});

TechSelect.displayName = 'TechSelect';

export const TechButton = forwardRef(({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}, ref) => {
  const baseClasses = `
    inline-flex items-center justify-center 
    font-medium 
    rounded-lg 
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
    transform hover:scale-105 active:scale-95
    ${className}
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-500 to-blue-600 
      hover:from-cyan-600 hover:to-blue-700 
      text-white 
      shadow-lg shadow-cyan-500/25 
      hover:shadow-xl hover:shadow-cyan-500/40
      focus:ring-cyan-400/50
    `,
    secondary: `
      bg-gradient-to-l from-cyan-500 to-blue-600 
      hover:to-cyan-600 hover:from-blue-700 
      text-white 
      shadow-lg shadow-cyan-500/25 
      hover:shadow-xl hover:shadow-cyan-500/40
      focus:ring-cyan-400/50
    `,
    outline: `
      bg-transparent 
      text-cyan-400 
      border-2 border-cyan-500/50 
      hover:bg-cyan-500/10 hover:border-cyan-400
      focus:ring-cyan-400/50
    `,
    ghost: `
      bg-transparent 
      text-gray-300 
      hover:bg-slate-700/50 hover:text-cyan-400
      focus:ring-cyan-400/50
    `,
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
    xl: 'px-8 py-5 text-xl',
  };

  return (
    <button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
});

TechButton.displayName = 'TechButton';

export const TechOption = forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <option
      ref={ref}
      className={`
        bg-slate-800 text-gray-100 
        ${className}
      `}
      {...props}
    >
      {children}
    </option>
  );
});

TechOption.displayName = 'TechOption';

export const TechFormContainer = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`
        bg-gradient-to-br from-slate-800/80 via-slate-900/60 to-slate-800/80 
        backdrop-blur-xl 
        border border-cyan-500/20 
        rounded-xl 
        shadow-2xl shadow-cyan-500/10
        p-6 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const TechInputGroup = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`
        relative
        flex 
        rounded-lg 
        overflow-hidden 
        border border-cyan-500/30 
        focus-within:border-cyan-400/60 
        focus-within:ring-2 focus-within:ring-cyan-400/50 focus-within:ring-offset-2 focus-within:ring-offset-slate-900
        transition-all duration-300 ease-in-out
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const TechTextarea = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`
        w-full px-4 py-3 
        bg-slate-800/50 dark:bg-slate-900/50 
        border border-cyan-500/30 dark:border-cyan-400/30 
        rounded-lg 
        text-gray-100 dark:text-gray-100 
        placeholder-gray-400 dark:placeholder-gray-500 
        backdrop-blur-sm
        focus:outline-none 
        focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 
        focus:border-cyan-400/60 
        transition-all duration-300 ease-in-out
        hover:border-cyan-400/50 hover:bg-slate-800/60
        resize-vertical
        min-h-[100px]
        ${className}
      `}
      {...props}
    />
  );
});

TechTextarea.displayName = 'TechTextarea';

export const TechCheckbox = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={`
        w-4 h-4 
        bg-slate-800/50 dark:bg-slate-900/50 
        border border-cyan-500/30 dark:border-cyan-400/30 
        rounded 
        text-cyan-500 
        focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 
        transition-all duration-300 ease-in-out
        hover:border-cyan-400/50 hover:bg-slate-800/60
        ${className}
      `}
      {...props}
    />
  );
});

TechCheckbox.displayName = 'TechCheckbox';

export const TechRadio = forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="radio"
      className={`
        w-4 h-4 
        bg-slate-800/50 dark:bg-slate-900/50 
        border border-cyan-500/30 dark:border-cyan-400/30 
        text-cyan-500 
        focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 
        transition-all duration-300 ease-in-out
        hover:border-cyan-400/50 hover:bg-slate-800/60
        ${className}
      `}
      {...props}
    />
  );
});

TechRadio.displayName = 'TechRadio';

export const TechLabel = forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={`
        block text-sm font-medium 
        text-gray-200 dark:text-gray-200 
        mb-2
        ${className}
      `}
      {...props}
    >
      {children}
    </label>
  );
});

TechLabel.displayName = 'TechLabel';

export const TechFormField = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`
        mb-4
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const TechFormRow = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-2 gap-4
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
