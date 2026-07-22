import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

interface VideoData {
  id: number;
  title: string;
  desc: string;
  url: string;
  badge: string;
}
import v1 from "../../assets/video/1.mp4"
import v2 from "../../assets/video/2.mp4"
import v3 from "../../assets/video/3.mp4"
import v4 from "../../assets/video/4.mp4"

const previewVideos: VideoData[] = [
  {
    id: 1,
    title: 'Live Classroom',
    desc: 'Live debate on high-stakes trade-offs under ambiguity.',
    url: v1,
    badge: 'CLASSROOM'
  },
  {
    id: 2,
    title: 'AI Co-Pilot',
    desc: 'LLM roadmap validation and strategy mockups.',
    url: v2,
    badge: 'AI WORKFLOW'
  },
  {
    id: 3,
    title: 'Exec Pitch',
    desc: 'Senior leaders calibrating style for C-suite alignment.',
    url: v3,
    badge: 'C-SUITE PITCH'
  },
  {
    id: 4,
    title: 'Peer Review',
    desc: 'Feedback circles critiquing PM decision histories.',
    url: v4,
    badge: 'PEER REVIEW'
  }
];
 
function VideoCard({ video }: { video: VideoData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMute = !isMuted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col rounded-xl bg-[#121212] border border-white/8 p-1 transition-all duration-300 hover:border-[#0080C7]/40 hover:shadow-[0_0_30px_rgba(0,128,199,0.15)] group h-full">
      {/* Video Frame in Reel Size (9:16) */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        className="relative aspect-10/16 w-full rounded-lg overflow-hidden bg-black/80 border border-white/5"
      >
        <video
          ref={videoRef}
          src={video.url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onClick={() => togglePlay()}
          className="w-full h-full object-cover cursor-pointer"
          playsInline
        />

        {/* Big Center Play Icon - Scaled for Reel container */}
        {!isPlaying && (
          <div 
            onClick={() => togglePlay()}
            className="absolute inset-0 flex items-center justify-center bg-black/45 cursor-pointer z-10"
          >
            <button className="w-12 h-12 rounded-full bg-[#0080C7] text-neutral-950 flex items-center justify-center shadow-lg hover:bg-[#009CEE] hover:scale-105 transition-all duration-200">
              <Play size={16} fill="currentColor" className="ml-0.5" />
            </button>
          </div>
        )}

        {/* Inline Overlay Badge */}
        <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[8px] font-bold text-white tracking-widest font-mono">
          {video.badge}
        </div>

        {/* Reel Controls Overlay */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/95 via-black/50 to-transparent z-20 transition-all duration-200 flex flex-col gap-1.5 ${
            showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Timeline slider */}
          <div className="flex items-center gap-2 w-full">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 h-0.5 rounded-lg appearance-none cursor-pointer accent-[#0080C7] bg-white/20"
              style={{
                background: `linear-gradient(to right, #0080C7 0%, #0080C7 ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.2) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.2) 100%)`
              }}
            />
          </div>

          {/* Controls buttons row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <button onClick={togglePlay} className="text-white hover:text-[#0080C7] transition-colors">
                {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
              </button>
              <button onClick={handleRestart} className="text-white hover:text-[#0080C7] transition-colors">
                <RotateCcw size={10} />
              </button>
              <button onClick={toggleMute} className="text-white hover:text-[#0080C7] transition-colors">
                {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
              </button>
            </div>
            <button onClick={toggleFullscreen} className="text-white hover:text-[#0080C7] transition-colors">
              <Maximize size={11} />
            </button>
          </div>
          <div className="text-[8px] font-mono text-white/50 text-right -mt-1">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>

    </div>
  );
}

export default function VideoSection() {
  return (
    <section id="preview" className="relative py-12 md:py-16 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Background Decorative Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0080C7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6">
            Studio Previews
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6">
            Go inside the <span className="text-[#0080C7]">Leadership Studio.</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mx-auto">
            Take a behind-the-scenes look at how we conduct weekly live simulations, practice AI workflow methodologies, pitch to the C-suite, and review peer logic.
          </p>
        </div>

        {/* 4-Video Reel-Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {previewVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

      </div>
    </section>
  );
}