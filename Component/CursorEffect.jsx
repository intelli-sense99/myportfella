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
      const lerp = (start, end, factor) => start + (end - start) * factor;

      currentPos.current.bg.x = lerp(
        currentPos.current.bg.x,
        targetPos.current.x,
        0.12
      );
      currentPos.current.bg.y = lerp(
        currentPos.current.bg.y,
        targetPos.current.y,
        0.12
      );

      currentPos.current.ripple.x = lerp(
        currentPos.current.ripple.x,
        targetPos.current.x,
        0.3
      );
      currentPos.current.ripple.y = lerp(
        currentPos.current.ripple.y,
        targetPos.current.y,
        0.3
      );

      currentPos.current.glow.x = lerp(
        currentPos.current.glow.x,
        targetPos.current.x,
        0.5
      );
      currentPos.current.glow.y = lerp(
        currentPos.current.glow.y,
        targetPos.current.y,
        0.5
      );

      // Apply transforms directly to DOM for optimal 60fps performance
      if (bgRef.current) {
        const xPercent = (currentPos.current.bg.x / window.innerWidth) * 100;
        const yPercent = (currentPos.current.bg.y / window.innerHeight) * 100;
        bgRef.current.style.background = `radial-gradient(circle 500px at ${xPercent}% ${yPercent}%, rgba(0, 242, 157, 0.08) 0%, rgba(0, 210, 255, 0.03) 40%, transparent 70%)`;
      }

      if (rippleRef.current) {
        rippleRef.current.style.transform = `translate3d(${
          currentPos.current.ripple.x
        }px, ${currentPos.current.ripple.y}px, 0) translate(-50%, -50%) scale(${
          isPressed ? 1.2 : 1
        })`;
        rippleRef.current.style.background = `radial-gradient(circle, rgba(0, 242, 157, 0.18) 0%, rgba(0, 210, 255, 0.08) 45%, transparent 70%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${
          currentPos.current.glow.x
        }px, ${currentPos.current.glow.y}px, 0) translate(-50%, -50%) scale(${
          isPressedRef.current ? 1.3 : 1
        })`;
        glowRef.current.style.background = `radial-gradient(circle, rgba(0, 242, 157, 0.25) 0%, rgba(0, 210, 255, 0.1) 30%, transparent 60%)`;
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
  }, [isPressed]);

  return (
    <>
      {/* Radial Gradient Background */}
      <div
        ref={bgRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ filter: "blur(30px)" }}
      />

      {/* Ripple Effect */}
      <div
        ref={rippleRef}
        className="fixed w-[450px] h-[450px] rounded-full pointer-events-none z-[1] will-change-transform"
        style={{
          filter: "blur(35px)",
        }}
      />

      {/* Inner Glow */}
      <div
        ref={glowRef}
        className="fixed w-48 h-48 rounded-full pointer-events-none z-[1] will-change-transform"
        style={{
          filter: "blur(18px)",
        }}
      />
    </>
  );
}
