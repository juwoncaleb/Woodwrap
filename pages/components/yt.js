"use client";

import { useState } from "react";

export default function VideoEmbed({
  id = "fnmfRvmtuck",
  title = "WOODWRAP project video",
}) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` // 1280x720
  );

  // If a video has no HD thumbnail, YouTube returns a tiny grey 120x90 image
  // instead of an error, so check the size and fall back to a lower quality one.
  const handleLoad = (e) => {
    if (e.currentTarget.naturalWidth <= 120) {
      setThumb(`https://i.ytimg.com/vi/${id}/sddefault.jpg`);
    }
  };

  return (
    <div className="w-full flex justify-center pb-[80px] px-4">
      <div className="relative w-full md:w-[60vw] aspect-video bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 w-full h-full cursor-pointer"
          >
            <img
              src={thumb}
              alt=""
              onLoad={handleLoad}
              className="w-full h-full object-cover"
            />

            {/* Play button */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 transition-transform group-hover:scale-105">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#1c1a16"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}