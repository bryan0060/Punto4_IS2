
import React, { useState, useMemo } from 'react';
import type { Song } from './types';
import { useMusicQueue } from './hooks/useMusicQueue';
import { SongList } from './components/SongList';
import { MusicPlayer } from './components/MusicPlayer';
import { QueueModal } from './components/QueueModal';
import { QueuePanel } from './components/QueuePanel';
import { LogoIcon, GithubIcon } from './components/Icons';

const MOCK_SONGS: Song[] = [
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55", albumArt: "https://picsum.photos/seed/bohemian/200" },
    { id: 2, title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02", albumArt: "https://picsum.photos/seed/stairway/200" },
    { id: 3, title: "Hotel California", artist: "Eagles", duration: "6:30", albumArt: "https://picsum.photos/seed/hotel/200" },
    { id: 4, title: "Smells Like Teen Spirit", artist: "Nirvana", duration: "5:01", albumArt: "https://picsum.photos/seed/teen-spirit/200" },
    { id: 5, title: "Like a Rolling Stone", artist: "Bob Dylan", duration: "6:13", albumArt: "https://picsum.photos/seed/rolling-stone/200" },
    { id: 6, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", albumArt: "https://picsum.photos/seed/blinding/200" },
];

export default function App() {
    const {
        queue,
        currentSongIndex,
        addToQueue,
        playNext,
        clearAndPlay,
        skipToNext,
        skipToPrevious
    } = useMusicQueue();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);
    const [isQueuePanelOpen, setIsQueuePanelOpen] = useState(false);

    const currentSong = useMemo(() => {
        return currentSongIndex !== null ? queue[currentSongIndex] : null;
    }, [queue, currentSongIndex]);

    const handlePlayRequest = (song: Song) => {
        if (currentSong) {
            setSelectedSong(song);
            setIsModalOpen(true);
        } else {
            clearAndPlay(song);
        }
    };
    
    const handleAddToQueue = () => {
        if (selectedSong) {
            addToQueue(selectedSong);
            setIsModalOpen(false);
            setSelectedSong(null);
        }
    };

    const handlePlayNext = () => {
        if (selectedSong) {
            playNext(selectedSong);
            setIsModalOpen(false);
            setSelectedSong(null);
        }
    };
    
    const handleClearAndPlay = () => {
        if (selectedSong) {
            clearAndPlay(selectedSong);
            setIsModalOpen(false);
            setSelectedSong(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
            <header className="bg-black/80 backdrop-blur-sm p-4 sticky top-0 z-20 shadow-lg flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <LogoIcon className="h-8 w-8 text-green-500" />
                    <h1 className="text-xl font-bold tracking-tight">Propuesta de Mejora UX</h1>
                </div>
                <a href="https://github.com/google/generative-ai-docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <GithubIcon className="h-6 w-6" />
                </a>
            </header>

            <main className="flex-grow p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-32">
                <div className="lg:col-span-2">
                    <section className="bg-gray-800/50 p-6 rounded-lg shadow-xl mb-8">
                        <h2 className="text-2xl font-bold mb-4 border-b border-green-500 pb-2 text-green-400">Taller de Ingeniería de Software 2</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-300 mb-2">1. Problema de UX Identificado en Spotify</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Una frustración común al usar Spotify es la gestión de la "Cola de reproducción". Al seleccionar una nueva canción mientras se escucha una playlist o álbum, la acción predeterminada a menudo interrumpe y reemplaza la cola actual sin una advertencia clara. Esto puede hacer que el usuario pierda su sesión de escucha de forma accidental, lo cual es especialmente molesto si había preparado una secuencia de canciones.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-300 mb-2">2. Propuesta de Solución de Diseño UX</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Se propone que, al intentar reproducir una nueva canción cuando ya hay una cola activa, la aplicación presente un diálogo modal no intrusivo. Este diálogo ofrecerá al usuario opciones claras y directas: <span className="font-bold text-green-400">"Añadir a la cola"</span> (acción principal), <span className="font-bold text-gray-200">"Reproducir a continuación"</span> (acción secundaria), y una opción explícita para <span className="font-bold text-red-400">"Limpiar y reproducir"</span>.
                                </p>
                            </div>
                             <div>
                                <h3 className="text-lg font-semibold text-gray-300 mb-2">3. Justificación de la Propuesta</h3>
                                <p className="text-gray-400 italic">
                                    "Esta solución mejora la experiencia al dar al usuario un control explícito sobre la cola de reproducción, evitando interrupciones accidentales y haciendo la gestión de la música más intuitiva."
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                         <h2 className="text-2xl font-bold mb-4 text-green-400">Demostración Interactiva</h2>
                         <p className="text-gray-400 mb-4">Simula la experiencia. Primero, reproduce una canción de la lista. Luego, intenta reproducir otra para ver la solución propuesta en acción.</p>
                        <SongList songs={MOCK_SONGS} onPlayRequest={handlePlayRequest} currentSongId={currentSong?.id ?? null} />
                    </section>
                </div>

                <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start">
                     <QueuePanel 
                        queue={queue} 
                        currentSongIndex={currentSongIndex}
                        isOpen={isQueuePanelOpen}
                        onToggle={() => setIsQueuePanelOpen(!isQueuePanelOpen)}
                     />
                </aside>
            </main>

            {currentSong && (
                <MusicPlayer 
                    currentSong={currentSong}
                    onNext={skipToNext} 
                    onPrev={skipToPrevious}
                    onToggleQueue={() => setIsQueuePanelOpen(!isQueuePanelOpen)}
                />
            )}

            <QueueModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                song={selectedSong}
                onAddToQueue={handleAddToQueue}
                onPlayNext={handlePlayNext}
                onClearAndPlay={handleClearAndPlay}
            />
        </div>
    );
}
