
import React from 'react';
import type { Song } from '../types';
import { PlusIcon, NextIcon, ClearIcon, CloseIcon } from './Icons';

interface QueueModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: Song | null;
    onAddToQueue: () => void;
    onPlayNext: () => void;
    onClearAndPlay: () => void;
}

export const QueueModal: React.FC<QueueModalProps> = ({ isOpen, onClose, song, onAddToQueue, onPlayNext, onClearAndPlay }) => {
    if (!isOpen || !song) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-md m-4 transform transition-all scale-95 opacity-0 animate-fade-in-scale"
                style={{ animationFillMode: 'forwards', animationDuration: '200ms' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">¿Qué deseas hacer?</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex items-center bg-gray-700/50 p-3 rounded-lg mb-6">
                    <img src={song.albumArt} alt={song.title} className="w-14 h-14 rounded-md mr-4 object-cover" />
                    <div>
                        <p className="font-semibold text-white">{song.title}</p>
                        <p className="text-sm text-gray-400">{song.artist}</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <button 
                        onClick={onAddToQueue}
                        className="w-full flex items-center justify-center gap-3 text-center p-4 rounded-lg bg-green-600 text-white font-bold hover:bg-green-500 transition-colors shadow-lg"
                    >
                        <PlusIcon className="w-6 h-6" />
                        <span>Añadir a la cola</span>
                    </button>
                    <button 
                        onClick={onPlayNext}
                        className="w-full flex items-center justify-center gap-3 text-center p-4 rounded-lg bg-gray-700 text-white font-bold hover:bg-gray-600 transition-colors"
                    >
                        <NextIcon className="w-6 h-6" />
                        <span>Reproducir a continuación</span>
                    </button>
                     <button 
                        onClick={onClearAndPlay}
                        className="w-full flex items-center justify-center gap-3 text-center p-4 rounded-lg bg-red-800/50 text-red-300 font-bold hover:bg-red-800/80 hover:text-red-200 transition-colors"
                    >
                        <ClearIcon className="w-6 h-6" />
                        <span>Limpiar y reproducir</span>
                    </button>
                </div>
            </div>
            <style>{`
                @keyframes fade-in-scale {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in-scale {
                    animation-name: fade-in-scale;
                }
            `}</style>
        </div>
    );
};
