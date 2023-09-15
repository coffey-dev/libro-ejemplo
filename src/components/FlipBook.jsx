import { PageFlip } from "page-flip";
import React, { useEffect, useRef } from "react";

export default function Flip() {
  const pageFlipRef = useRef(null);

  useEffect(() => {
    if (pageFlipRef.current) {
      const pageFlip = new PageFlip(pageFlipRef.current, {
        width: 400,
        height: 600,
        showCover: true
      });
      pageFlip.loadFromImages([
        "https://picsum.photos/400/300?1",
        "https://picsum.photos/400/300?2",
        "https://picsum.photos/400/300?3",
        "https://picsum.photos/400/300?4",
        "https://picsum.photos/400/300?5",
        "https://picsum.photos/400/300?6",
        "https://picsum.photos/400/300?7",
        "https://picsum.photos/400/300?8"
      ]);
    }
  }, []);

  return (
    <div ref={pageFlipRef} id="root">
      {/* Contenido del Flip */}
    </div>
  );
}import "./FlipBook.css";
