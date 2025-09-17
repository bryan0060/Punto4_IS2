
import React from 'react';
import type { Song } from '../types';
import { PlayIcon, PauseIcon, MusicNoteIcon } from './Icons';

interface SongListProps {
    songs: Song[];
    onPlayRequest: (song: Song) => void;
    currentSongId: number | null;
}

const SongItem: React.FC<{ song: Song; onPlayRequest: (song: Song) => void; isPlaying: boolean }> = ({ song, onPlayRequest, isPlaying }) => {
    return (
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group">
            <img src={song.albumArt} alt={song.title} className="w-12 h-12 rounded-md mr-4 object-cover" />
            <div className="flex-grow">
                <p className={`font-semibold ${isPlaying ? 'text-green-400' : 'text-white'}`}>{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
            <div className="text-sm text-gray-400 mr-4 hidden md:block">{song.duration}</div>
            <button 
                onClick={() => onPlayRequest(song)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-black shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label={`Reproducir ${song.title}`}
            >
                {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
            </button>
            <div className={`w-10 h-10 flex items-center justify-center transition-opacity duration-200 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-0'}`}>
                <MusicNoteIcon className="w-5 h-5 text-green-400 animate-pulse" />
            </div>
        </div>
    );
};

export const SongList: React.FC<SongListProps> = ({ songs, onPlayRequest, currentSongId }) => {
    return (
        <div className="space-y-2 bg-gray-800/50 p-4 rounded-lg">
            {songs.map(song => (
                <SongItem key={song.id} song={song} onPlayRequest={onPlayRequest} isPlaying={currentSongId === song.id} />
            ))}
        </div>
    );
};
