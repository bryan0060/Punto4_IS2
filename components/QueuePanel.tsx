
import React from 'react';
import type { Song } from '../types';
import { QueueListIcon, MusicNoteIcon } from './Icons';

interface QueuePanelProps {
    queue: Song[];
    currentSongIndex: number | null;
    isOpen: boolean;
    onToggle: () => void;
}

export const QueuePanel: React.FC<QueuePanelProps> = ({ queue, currentSongIndex, isOpen, onToggle }) => {
    return (
        <div className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden">
            <button onClick={onToggle} className="w-full p-4 flex justify-between items-center bg-gray-700/50 hover:bg-gray-700 transition-colors">
                <h3 className="text-lg font-bold text-white">Cola de reproducción</h3>
                <QueueListIcon className="w-6 h-6 text-green-400" />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-2 space-y-1 max-h-80 overflow-y-auto">
                {queue.length === 0 ? (
                    <p className="text-gray-400 text-center p-4">La cola está vacía.</p>
                ) : (
                    queue.map((song, index) => {
                        const isPlaying = index === currentSongIndex;
                        return (
                            <div key={`${song.id}-${index}`} className={`flex items-center p-2 rounded-md ${isPlaying ? 'bg-green-500/20' : ''}`}>
                                <div className="w-6 text-center mr-2">
                                    {isPlaying ? (
                                        <MusicNoteIcon className="w-5 h-5 text-green-400 mx-auto animate-pulse" />
                                    ) : (
                                        <span className="text-sm text-gray-400">{index + 1}</span>
                                    )}
                                </div>
                                <img src={song.albumArt} alt={song.title} className="w-10 h-10 rounded object-cover mr-3" />
                                <div className="flex-grow">
                                    <p className={`font-medium ${isPlaying ? 'text-green-300' : 'text-gray-200'}`}>{song.title}</p>
                                    <p className="text-xs text-gray-400">{song.artist}</p>
                                </div>
                            </div>
                        );
                    })
                )}
                </div>
            </div>
        </div>
    );
}
