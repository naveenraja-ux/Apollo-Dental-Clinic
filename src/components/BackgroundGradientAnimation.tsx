"use client"

import { motion } from "motion/react"
import React, { useCallback, useEffect, useRef } from "react"
import { cn } from "../lib/utils"

export interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  blendingValue?: string
  children?: React.ReactNode
  className?: string
  interactive?: boolean
}

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
}: BackgroundGradientAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const positionRef = useRef({ curX: 0, curY: 0, tgX: 0, tgY: 0 })

  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animate = useCallback(() => {
    if (!interactiveRef.current || isMobile) return;

    const { curX, curY, tgX, tgY } = positionRef.current
    positionRef.current.curX = curX + (tgX - curX) / 40
    positionRef.current.curY = curY + (tgY - curY) / 40

    interactiveRef.current.style.transform = `translate(${Math.round(positionRef.current.curX)}px, ${Math.round(positionRef.current.curY)}px)`

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (interactive) {
      animationRef.current = requestAnimationFrame(animate)
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [interactive, animate])

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      positionRef.current.tgX = event.clientX - rect.left
      positionRef.current.tgY = event.clientY - rect.top
    }
  }, [])

  const gradientStyle = {
    width: size,
    height: size,
    mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
  }

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{
        background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
      onMouseMove={interactive ? handleMouseMove : undefined}
    >
      {/* SVG filter for goo effect */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="goo-filter">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              result="goo"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Gradient blobs container */}
      <div className={cn(
        "absolute inset-0 blur-[100px] opacity-60",
        !isMobile && "[filter:url(#goo-filter)_blur(100px)]"
      )}>
        {/* First blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            ...gradientStyle,
            background: `radial-gradient(circle at center, rgb(${firstColor}) 0%, rgb(${firstColor}) 50%, transparent 100%)`,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "center center",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Second blob */}
        <motion.div
          className="absolute rounded-full opacity-70"
          style={{
            ...gradientStyle,
            background: `radial-gradient(circle at center, rgba(${secondColor}, 0.8) 0%, transparent 100%)`,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 400px) center",
          }}
          animate={{
            rotate: [0, -360],
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Third blob */}
        <motion.div
          className="absolute rounded-full opacity-70"
          style={{
            ...gradientStyle,
            background: `radial-gradient(circle at center, rgba(${thirdColor}, 0.8) 0%, transparent 100%)`,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% + 400px) center",
          }}
          animate={{
            rotate: [0, 360],
            x: [0, -60, 40, 0],
            y: [0, 50, -20, 0],
          }}
          transition={{
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            x: { duration: 28, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 32, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Fourth blob */}
        <motion.div
          className="absolute rounded-full opacity-60"
          style={{
            ...gradientStyle,
            background: `radial-gradient(circle at center, rgba(${fourthColor}, 0.8) 0%, transparent 100%)`,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 200px) center",
          }}
          animate={{
            rotate: [0, -360],
            x: [0, 30, -50, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            rotate: { duration: 38, repeat: Infinity, ease: "linear" },
            x: { duration: 40, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 28, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Fifth blob */}
        <motion.div
          className="absolute rounded-full opacity-70"
          style={{
            ...gradientStyle,
            background: `radial-gradient(circle at center, rgba(${fifthColor}, 0.8) 0%, transparent 100%)`,
            top: `calc(50% - ${size} / 2)`,
            left: `calc(50% - ${size} / 2)`,
            transformOrigin: "calc(50% - 800px) calc(50% + 800px)",
          }}
          animate={{
            rotate: [0, 360],
            x: [0, -40, 60, 0],
            y: [0, 60, -30, 0],
          }}
          transition={{
            rotate: { duration: 42, repeat: Infinity, ease: "linear" },
            x: { duration: 36, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 24, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Interactive pointer gradient */}
        {interactive && (
          <div
            ref={interactiveRef}
            className="absolute w-full h-full -top-1/2 -left-1/2 opacity-70"
            style={{
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.8) 0%, transparent 50%)`,
              mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            }}
          />
        )}
      </div>

      {/* Content layer */}
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
}

export default function BackgroundGradientAnimationDemo() {
  return <BackgroundGradientAnimation />
}
