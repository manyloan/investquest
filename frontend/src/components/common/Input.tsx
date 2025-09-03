// src/components/common/Input.tsx
import React from 'react';

// Nosso Input vai aceitar todas as propriedades de um input HTML padrão
// e também uma 'label' opcional.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
    return (
        <div>
            {label && (
                <label htmlFor={props.id} className="block text-sm font-medium text-gray-300 mb-1">
                    {label}
                </label>
            )}
            <input
                {...props}
                className="block w-full rounded-md border-0 py-2.5 px-3 bg-slate-700 text-gray-100 shadow-sm ring-1 ring-inset ring-slate-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6 transition-colors"
            />
        </div>
    );
}