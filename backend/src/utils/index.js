// filepath: /inventory-app/inventory-app/backend/src/utils/index.js
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
};

export const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};