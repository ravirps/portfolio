"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaMusic } from "react-icons/fa";

export default function BackgroundMusic({ externalControl }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // 50% volume (approximately 50 decibels)
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isManualControl, setIsManualControl] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      // Set initial volume
      audioRef.current.volume = volume;
    }
  }, []);

  // Handle external control
  useEffect(() => {
    if (externalControl && audioRef.current && !isLoading && !hasError && !isManualControl) {
      console.log("External control triggered:", externalControl, { isPlaying, isManualControl });
      
      if (externalControl.shouldPlay && !isPlaying) {
        console.log("External play command");
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error("Failed to play audio:", error);
        });
      } else if (externalControl.shouldPause && isPlaying) {
        console.log("External pause command");
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else if (externalControl) {
      console.log("External control blocked:", { 
        hasAudioRef: !!audioRef.current, 
        isLoading, 
        hasError, 
        isManualControl 
      });
    }
  }, [externalControl, isPlaying, isLoading, hasError, isManualControl]);

  // Reset manual control flag after external control
  useEffect(() => {
    if (externalControl) {
      // Reset manual control flag after a delay to allow external control
      const timer = setTimeout(() => {
        setIsManualControl(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [externalControl]);

  // Separate effect to handle loading timeout
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        console.log("Loading timeout reached, setting loading to false");
        setIsLoading(false);
      }, 3000); // 3 second timeout

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  const togglePlayPause = () => {
    if (audioRef.current && !isLoading && !hasError) {
      console.log("Manual play/pause clicked. Current state:", { isPlaying, isManualControl });
      setIsManualControl(true); // Set manual control flag
      
      if (isPlaying) {
        console.log("Pausing audio manually");
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        console.log("Playing audio manually");
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          console.log("Audio started successfully");
        }).catch((error) => {
          console.error("Failed to play audio:", error);
          setIsManualControl(false); // Reset flag on error
        });
      }
    } else {
      console.log("Cannot toggle audio:", { isLoading, hasError, audioRef: !!audioRef.current });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    // Loop the audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Failed to loop audio:", error);
      });
    }
  };

  // Manual reset function for debugging
  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.load();
      setIsLoading(true);
      setHasError(false);
      setIsPlaying(false);
      setIsManualControl(false);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50">
      <div 
        className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 border border-purple-100"
        onContextMenu={(e) => {
          e.preventDefault();
          resetAudio();
        }}
        title="Right-click to reset audio"
      >
        {/* Audio element */}
        <audio
          ref={audioRef}
          onEnded={handleEnded}
          preload="metadata"
          onLoadStart={() => {
            console.log("Audio loading started");
            setIsLoading(true);
            setHasError(false);
          }}
          onLoadedMetadata={() => {
            console.log("Audio metadata loaded");
            setIsLoading(false);
          }}
          onCanPlay={() => {
            console.log("Audio can play");
            setIsLoading(false);
          }}
          onCanPlayThrough={() => {
            console.log("Audio can play through");
            setIsLoading(false);
          }}
          onLoadedData={() => {
            console.log("Audio data loaded");
            setIsLoading(false);
          }}
          onError={(e) => {
            console.error("Audio error:", e);
            setIsLoading(false);
            setHasError(true);
            console.log("Audio file not found. Please add perfect-instrumental.mp3 to public/audio/");
          }}
        >
          <source src="/audio/perfect-instrumental.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          disabled={hasError || isLoading}
          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
            isPlaying ? 'animate-pulse' : ''
          } ${hasError ? 'opacity-50 cursor-not-allowed' : ''} ${isLoading ? 'animate-spin' : ''}`}
          title={hasError ? "Audio Error" : isLoading ? "Loading..." : isPlaying ? "Pause" : "Play"}
        >
          {hasError ? (
            <FaMusic size={14} className="sm:w-4 sm:h-4" />
          ) : isLoading ? (
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : isPlaying ? (
            <FaPause size={14} className="sm:w-4 sm:h-4" />
          ) : (
            <FaPlay size={14} className="sm:w-4 sm:h-4" />
          )}
        </button>

        {/* Volume control */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleMute}
            className="text-gray-600 hover:text-purple-500 transition-colors duration-200"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <FaVolumeMute size={16} className="sm:w-[18px] sm:h-[18px]" /> : <FaVolumeUp size={16} className="sm:w-[18px] sm:h-[18px]" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 sm:w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            title="Volume"
          />
        </div>

        {/* Song info - Hidden on very small screens */}
        <div className="hidden sm:block text-sm text-gray-700 max-w-36">
          <div className="flex items-center gap-1 mb-1">
            <FaMusic size={12} className="text-purple-500" />
            <div className="font-semibold text-purple-700">
              {hasError ? "Audio Error" : "Perfect (Instrumental)"}
            </div>
          </div>
          <div className="text-gray-500 text-xs">
            {hasError ? "Check audio file" : "Ed Sheeran"}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
