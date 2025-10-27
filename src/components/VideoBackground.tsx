'use client'

import { useEffect, useRef } from 'react'

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Start playing
    video.play().catch(console.error)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {/* Video Element - continuous loop */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Using the provided video file */}
        <source src="/19575-303404028.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      
      {/* Animated particles effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce" />
        <div className="absolute top-32 right-20 w-3 h-3 bg-orange-400/50 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-green-400/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  )
}

export default VideoBackground