"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorEffect() {
  const [isPressed, setIsPressed] = useState(false);

  // Refs for tracking position and state without triggering re-renders
  const targetPos = useRef({ x: 0, y: 0 });
  const isPressedRef = useRef(false);
  const currentPos = useRef({
    bg: { x: 0, y: 0 },
    ripple: { x: 0, y: 0 },
    glow: { x: 0, y: 0 },
  });

  // Refs for DOM elements
  const bgRef = useRef(null);
  const rippleRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Initial position to center
    targetPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      setIsPressed(true);
      isPressedRef.current = true;
    };
    const handleMouseUp = () => {
      setIsPressed(false);
      isPressedRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    let animationId;

    const animate = () => {
      // Lerp factors (0.1 = slow/smooth, 0.2 = fast/responsive)
      const lerp = (start, end, factor) => start + (end - start) * factor;

      // Update positions for each layer with much higher speeds for snappier response
      currentPos.current.bg.x = lerp(
        currentPos.current.bg.x,
        targetPos.current.x,
        0.15
      );
      currentPos.current.bg.y = lerp(
        currentPos.current.bg.y,
        targetPos.current.y,
        0.15
      );

      currentPos.current.ripple.x = lerp(
        currentPos.current.ripple.x,
        targetPos.current.x,
        0.35
      );
      currentPos.current.ripple.y = lerp(
        currentPos.current.ripple.y,
        targetPos.current.y,
        0.35
      );

      currentPos.current.glow.x = lerp(
        currentPos.current.glow.x,
        targetPos.current.x,
        0.6
      );
      currentPos.current.glow.y = lerp(
        currentPos.current.glow.y,
        targetPos.current.y,
        0.6
      );

      // Apply transforms directly to DOM for maximum performance
      if (bgRef.current) {
        const xPercent = (currentPos.current.bg.x / window.innerWidth) * 100;
        const yPercent = (currentPos.current.bg.y / window.innerHeight) * 100;
        // Sharper background flare
        bgRef.current.style.background = `radial-gradient(circle 600px at ${xPercent}% ${yPercent}%, rgba(229, 9, 20, 0.15) 0%, rgba(131, 16, 16, 0.05) 40%, transparent 75%)`;
      }

      if (rippleRef.current) {
        rippleRef.current.style.transform = `translate3d(${
          currentPos.current.ripple.x
        }px, ${currentPos.current.ripple.y}px, 0) translate(-50%, -50%) scale(${
          isPressed ? 1.2 : 1
        })`;
        // More vibrant ripple
        rippleRef.current.style.background = `radial-gradient(circle, rgba(229, 9, 20, 0.25) 0%, rgba(229, 9, 20, 0.1) 45%, transparent 70%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${
          currentPos.current.glow.x
        }px, ${currentPos.current.glow.y}px, 0) translate(-50%, -50%) scale(${
          isPressedRef.current ? 1.4 : 1
        })`;
        // Sharper inner glow
        glowRef.current.style.background = `radial-gradient(circle, rgba(229, 9, 20, 0.4) 0%, rgba(229, 9, 20, 0.15) 30%, transparent 60%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []); // Remove isPressed dependency to avoid loop restarts

  return (
    <>
      {/* Radial Gradient Background - Smoothed via Lerp */}
      <div
        ref={bgRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ filter: "blur(30px)" }}
      />

      {/* Ripple Effect - Hardware Accelerated */}
      <div
        ref={rippleRef}
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-[1] will-change-transform"
        style={{
          filter: "blur(40px)",
        }}
      />

      {/* Inner Glow - Tighter & Responsive */}
      <div
        ref={glowRef}
        className="fixed w-64 h-64 rounded-full pointer-events-none z-[1] will-change-transform"
        style={{
          filter: "blur(20px)",
        }}
      />
    </>
  );
}
