import React from 'react';
import { classNames } from '../../../utils/helpers';


const Button = ({
                    children,
                    variant = 'primary',
                    size = 'medium',
                    disabled = false,
                    loading = false,
                    onClick,
                    className = '',
                    type = 'button',
                    ...props
                }) => {
    const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
        secondary: 'btn-secondary',
        danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500'
    };

    const sizes = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-6 py-2',
        large: 'px-8 py-3 text-lg'
    };

    const classes = classNames(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        loading && 'cursor-not-allowed',
        className
    );

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {loading ? (
                <div className="flex items-center">
                    <div className="spinner w-4 h-4 mr-2"></div>
                    Loading...
                </div>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;