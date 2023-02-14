import React from "react";

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ children, isOpen, onClose }: Props) {
    return isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-lg py-8 px-6 shadow-xl z-20">
                <button
                    className="absolute top-3 right-3 mt-4 mr-6 text-3xl font-bold text-slate-300 hover:text-gray-700"
                    onClick={onClose}
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    ) : null;
}

export default Modal