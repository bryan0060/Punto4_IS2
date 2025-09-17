
import { useState, useCallback } from 'react';
import type { Song } from '../types';

export const useMusicQueue = () => {
    const [queue, setQueue] = useState<Song[]>([]);
    const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);

    const addToQueue = useCallback((song: Song) => {
        setQueue(prevQueue => [...prevQueue, song]);
    }, []);

    const playNext = useCallback((song: Song) => {
        setQueue(prevQueue => {
            if (currentSongIndex === null) {
                return [song];
            }
            const newQueue = [...prevQueue];
            newQueue.splice(currentSongIndex + 1, 0, song);
            return newQueue;
        });
    }, [currentSongIndex]);

    const clearAndPlay = useCallback((song: Song) => {
        setQueue([song]);
        setCurrentSongIndex(0);
    }, []);

    const skipToNext = useCallback(() => {
        if (currentSongIndex !== null && currentSongIndex < queue.length - 1) {
            setCurrentSongIndex(prevIndex => prevIndex! + 1);
        }
    }, [currentSongIndex, queue.length]);

    const skipToPrevious = useCallback(() => {
        if (currentSongIndex !== null && currentSongIndex > 0) {
            setCurrentSongIndex(prevIndex => prevIndex! - 1);
        }
    }, [currentSongIndex]);

    return {
        queue,
        currentSongIndex,
        addToQueue,
        playNext,
        clearAndPlay,
        skipToNext,
        skipToPrevious
    };
};
