
import React from 'react';
import type { Song } from '../types';
import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon, QueueListIcon } from './Icons';

interface MusicPlayerProps {
    currentSong: Song | null;
    onNext: () => void;
    onPrev: () => void;
    onToggleQueue: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ currentSong, onNext, onPrev, onToggleQueue }) => {
    if (!currentSong) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 h-24 bg-gray-800 border-t border-gray-700 p-4 flex items-center justify-between z-30">
            <div className="flex items-center w-1/3">
                <img src={currentSong.albumArt} alt={currentSong.title} className="w-14 h-14 rounded-md mr-4 object-cover" />
                <div>
                    <p className="font-semibold text-white">{currentSong.title}</p>
                    <p className="text-sm text-gray-400">{currentSong.artist}</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center w-1/3">
                <div className="flex items-center gap-4">
                    <button onClick={onPrev} className="text-gray-400 hover:text-white transition-colors" aria-label="Anterior">
                        <SkipBackIcon className="w-6 h-6" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg" aria-label="Pausa">
                        <PauseIcon className="w-6 h-6" />
                    </button>
                    <button onClick={onNext} className="text-gray-400 hover:text-white transition-colors" aria-label="Siguiente">
                        <SkipForwardIcon className="w-6 h-6" />
                    </button>
                </div>
                {/* Mock progress bar */}
                <div className="w-full max-w-sm mt-2 flex items-center gap-2 text-xs text-gray-400">
                    <span>1:23</span>
                    <div className="w-full bg-gray-600 rounded-full h-1">
                        <div className="bg-white rounded-full h-1" style={{ width: '45%' }}></div>
                    </div>
                    <span>{currentSong.duration}</span>
                </div>
            </div>

            <div className="flex items-center justify-end w-1/3">
                <button onClick={onToggleQueue} className="text-gray-400 hover:text-white transition-colors" aria-label="Mostrar cola">
                    <QueueListIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};
