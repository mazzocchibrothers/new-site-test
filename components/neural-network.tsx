"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface Node {
  id: number;
  label: string;
  x: number; // percentage
  y: number; // percentage
  size: number; // relative radius multiplier
  color: "orange" | "pink" | "purple" | "white";
}

interface Connection {
  from: number;
  to: number;
}

const NODES: Node[] = [
  { id: 0,  label: "Leadership",        x: 12, y: 8,  size: 1.4, color: "orange" },
  { id: 1,  label: "Communication",     x: 35, y: 14, size: 1.0, color: "white" },
  { id: 2,  label: "Problem Solving",   x: 60, y: 9,  size: 1.2, color: "purple" },
  { id: 3,  label: "Adaptability",      x: 82, y: 20, size: 0.9, color: "white" },
  { id: 4,  label: "Collaboration",     x: 20, y: 36, size: 1.0, color: "pink" },
  { id: 5,  label: "Critical Thinking", x: 47, y: 31, size: 1.3, color: "purple" },
  { id: 6,  label: "Emotional IQ",      x: 70, y: 38, size: 0.9, color: "white" },
  { id: 7,  label: "Data Analysis",     x: 88, y: 42, size: 1.1, color: "orange" },
  { id: 8,  label: "Strategic Vision",  x: 16, y: 56, size: 1.3, color: "purple" },
  { id: 9,  label: "Innovation",        x: 42, y: 52, size: 1.0, color: "pink" },
  { id: 10, label: "Resilience",        x: 65, y: 58, size: 0.8, color: "white" },
  { id: 11, label: "Coaching",          x: 84, y: 62, size: 1.0, color: "orange" },
  { id: 12, label: "Decision Making",   x: 28, y: 74, size: 1.1, color: "white" },
  { id: 13, label: "Potential",         x: 54, y: 72, size: 0.9, color: "purple" },
  { id: 14, label: "Domain Expertise",  x: 74, y: 78, size: 1.1, color: "pink" },
  { id: 15, label: "Talent",            x: 92, y: 82, size: 1.3, color: "orange" },
];

const CONNECTIONS: Connection[] = [
  { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
  { from: 0, to: 4 }, { from: 1, to: 5 }, { from: 2, to: 5 },
  { from: 3, to: 6 }, { from: 3, to: 7 }, { from: 4, to: 5 },
  { from: 4, to: 8 }, { from: 5, to: 6 }, { from: 5, to: 9 },
  { from: 6, to: 7 }, { from: 6, to: 10 }, { from: 7, to: 11 },
  { from: 8, to: 9 }, { from: 8, to: 12 }, { from: 9, to: 10 },
  { from: 9, to: 13 }, { from: 10, to: 11 }, { from: 10, to: 13 },
  { from: 11, to: 14 }, { from: 11, to: 15 }, { from: 12, to: 13 },
  { from: 13, to: 14 }, { from: 14, to: 15 },
];

function nodeColor(color: Node["color"]) {
  switch (color) {
    case "orange": return "#f97316";
    case "pink":   return "#ec4899";
    case "purple": return "#8b5cf6";
    default:       return "rgba(255,255,255,0.7)";
  }
}

// Seeded float animation phases
function seeded(seed: number, range: number) {
  return (Math.sin(seed * 127.1 + 311.7) * 0.5 + 0.5) * range;
}

export function NeuralNetwork() {
  const [activeSignal, setActiveSignal] = useState<number | null>(null);
  const [litNodes, setLitNodes] = useState<Set<number>>(new Set());
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  // Fire random signals along connections
  useEffect(() => {
    const fire = () => {
      const idx = Math.floor(Math.random() * CONNECTIONS.length);
      setActiveSignal(idx);
      const { from, to } = CONNECTIONS[idx];
      setLitNodes(new Set([from, to]));
      setTimeout(() => {
        setActiveSignal(null);
        setLitNodes(new Set());
      }, 900);
    };

    const interval = setInterval(fire, 1400);
    return () => clearInterval(interval);
  }, []);

  // Track mouse relative to container for proximity glow
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full select-none">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Signal gradient along connections */}
          <linearGradient id="signal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#ec4899" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Node glow filter */}
          <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-subtle" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base connection lines */}
        {CONNECTIONS.map((conn, i) => {
          const from = NODES[conn.from];
          const to = NODES[conn.to];
          const isActive = activeSignal === i;
          return (
            <motion.line
              key={`line-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isActive ? "url(#signal-grad)" : "rgba(255,255,255,0.08)"}
              strokeWidth={isActive ? 0.35 : 0.18}
              animate={isActive ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.6 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          );
        })}

        {/* Signal ball traveling along active connection */}
        {activeSignal !== null && (() => {
          const conn = CONNECTIONS[activeSignal];
          const from = NODES[conn.from];
          const to = NODES[conn.to];
          return (
            <motion.circle
              key={`signal-${activeSignal}`}
              r={0.8}
              fill="#ec4899"
              filter="url(#glow-strong)"
              initial={{ cx: from.x, cy: from.y, opacity: 0.9, scale: 1 }}
              animate={{ cx: to.x, cy: to.y, opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.85, ease: "easeIn" }}
            />
          );
        })()}

        {/* Nodes */}
        {NODES.map((node) => {
          const color = nodeColor(node.color);
          const baseR = 1.2 * node.size;
          const isLit = litNodes.has(node.id);
          const isHovered = hoveredNode === node.id;

          // Mouse proximity brightness
          const dx = mousePos.x - node.x;
          const dy = mousePos.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / 18);

          const r = isLit || isHovered ? baseR * 1.6 : baseR + proximity * 0.8;

          return (
            <g key={`node-${node.id}`} style={{ cursor: "default" }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}>

              {/* Outer glow ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={baseR * 2.2}
                fill={color}
                opacity={isLit ? 0.15 : proximity * 0.12}
                animate={isLit ? { opacity: [0.05, 0.2, 0.05], r: [baseR * 2, baseR * 3, baseR * 2] } : {}}
                transition={{ duration: 0.8 }}
              />

              {/* Floating animation for node */}
              <motion.g
                animate={{
                  translateY: [0, -seeded(node.id, 1.5), 0, seeded(node.id + 7, 1.2), 0],
                  translateX: [0, seeded(node.id + 3, 1.0), 0, -seeded(node.id + 5, 0.8), 0],
                }}
                transition={{
                  duration: 5 + seeded(node.id, 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: seeded(node.id, 3),
                }}
              >
                {/* Node circle */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={r}
                  fill={color}
                  filter={isLit || isHovered || proximity > 0.3 ? "url(#glow-strong)" : "url(#glow-subtle)"}
                  animate={{
                    r: isLit ? [baseR, baseR * 1.7, baseR * 1.3] : baseR + proximity * 0.6,
                    opacity: isLit ? [0.9, 1, 0.9] : 0.75 + proximity * 0.25,
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Node label */}
                <motion.text
                  x={node.x}
                  y={node.y - baseR - 1.2}
                  textAnchor="middle"
                  fontSize={1.8}
                  fontFamily="Inter, sans-serif"
                  fontWeight="500"
                  fill={color}
                  animate={{
                    opacity: isLit || isHovered || proximity > 0.4 ? 1 : 0.35 + proximity * 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {node.label}
                </motion.text>
              </motion.g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
