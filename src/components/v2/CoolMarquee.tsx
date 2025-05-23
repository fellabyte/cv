"use client";
import React, { useRef, useEffect, useState } from "react";

export default function CoolMarquee({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 4;

    if (container.scrollLeft === 0) {
      container.scrollLeft = singleSetWidth;
    }

    const speed = 1;

    const autoScroll = () => {
      if (!autoScrollEnabled || isDragging) {
        animationRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      container.scrollLeft += speed;

      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = container.scrollLeft - singleSetWidth;
      }

      if (container.scrollLeft < singleSetWidth / 2) {
        container.scrollLeft += singleSetWidth;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, autoScrollEnabled]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setAutoScrollEnabled(false);
    if (!scrollContainerRef.current) return;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScrollEnabled(true), 50);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setAutoScrollEnabled(false);
    if (scrollContainerRef.current) {
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseEnter = () => {
    setAutoScrollEnabled(false);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setAutoScrollEnabled(true);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll slider-menu cursor-grab"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          handleMouseUp();
          handleMouseLeave();
        }}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div className="flex whitespace-nowrap py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
