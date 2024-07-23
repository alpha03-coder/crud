// src/components/ToastProvider.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    return <ToastContainer />;
};

export const showDeleteToast = (message) => {
    toast.success(message);
};

export const showCreateToast = (message) => {
    toast.success(message);
};

export const showUpdateToast = (message) => {
    toast.success(message);
};

export const showErrorToast = (message) => {
    toast.error(message);
};

export default Toast;
