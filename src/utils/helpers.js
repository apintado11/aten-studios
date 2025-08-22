export const getToolColorClass = (iconColor) => {
    if (iconColor.includes('pink')) return 'bg-pink-100 text-pink-700 hover:bg-pink-200';
    if (iconColor.includes('blue')) return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
    if (iconColor.includes('orange')) return 'bg-orange-100 text-orange-700 hover:bg-orange-200';
    if (iconColor.includes('purple')) return 'bg-purple-100 text-purple-700 hover:bg-purple-200';
    if (iconColor.includes('teal')) return 'bg-teal-100 text-teal-700 hover:bg-teal-200';
    return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
};

export const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(price);
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};