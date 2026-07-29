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

interface VideoCardProps {
  video: VideoData;
  activeVideoId: number | null;
  setActiveVideoId: React.Dispatch<React.SetStateAction<number | null>>;
}

function VideoCard({ video, activeVideoId, setActiveVideoId }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (activeVideoId !== video.id) {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    }
  }, [activeVideoId, video.id]);

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
    if (activeVideoId === video.id && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setActiveVideoId(null);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setActiveVideoId(video.id);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (activeVideoId === video.id) {
      setActiveVideoId(null);
    }
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
    setActiveVideoId(video.id);
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
    <div className="flex flex-col rounded-xl bg-[#0a0c10] border border-[#0080C7]/40 p-1.5 transition-all duration-300 hover:border-[#0080C7]/70 shadow-[0_0_25px_rgba(0,128,199,0.2)] hover:shadow-[0_0_50px_rgba(0,128,199,0.4)] group h-full relative overflow-hidden">
      {/* Intense inner radial glow for the card */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,128,199,0.25),transparent_70%)] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

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
          onEnded={handleEnded}
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
            <button className="w-12 h-12 rounded-full bg-[#0080C7] text-neutral-950 flex items-center justify-center shadow-[0_0_20px_rgba(0,128,199,0.6)] hover:shadow-[0_0_30px_rgba(0,128,199,1)] hover:bg-[#009CEE] hover:scale-110 transition-all duration-300">
              <Play size={16} fill="currentColor" className="ml-0.5 drop-shadow-md" />
            </button>
          </div>
        )}

        {/* Inline Overlay Badge */}
        <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[8px] font-bold text-white tracking-widest font-mono">
          {video.badge}
        </div>

        {/* Reel Controls Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/95 via-black/50 to-transparent z-20 transition-all duration-200 flex flex-col gap-1.5 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  return (
    <section id="preview" className="relative py-12 md:py-20 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Background Decorative Atmospheric Glow */}
      <div className="absolute -top-40 -left-40 w-150 h-150 rounded-full z-0 bg-[#0044cc] blur-[150px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[70%] h-[70%] z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,128,199,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
            Studio Previews
          </span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-8">
            Go inside the <br className="md:hidden" />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              Leadership Studio.
              {/* Horizontal flare line (no white dot) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span>
          </h2>
          <p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-2xl mx-auto font-sans">
            Take a behind-the-scenes look at how we conduct weekly live simulations, practice AI workflow methodologies, pitch to the C-suite, and review peer logic.
          </p>
        </div>

        {/* 4-Video Reel-Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {previewVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              activeVideoId={activeVideoId}
              setActiveVideoId={setActiveVideoId}
            />
          ))}
        </div>

      </div>
    </section>
  );
}