"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const W = 60;
const H = 48;
const S = H * Math.tan((22 * Math.PI) / 180); // x-shift per row ≈ 19.4px

// All geometry uses the same formula:
// Cell (col, row) corners in screen space:
//   TL = (col*W + row*S,     row*H)
//   TR = ((col+1)*W + row*S, row*H)
//   BR = ((col+1)*W + (row+1)*S, (row+1)*H)
//   BL = (col*W + (row+1)*S, (row+1)*H)
//
// Grid lines:
//   horizontal: y = r*H
//   diagonal col c: passes through (c*W + r*S, r*H) for every row r

const COLORS = [
  "rgba(249,115,22,",
  "rgba(236,72,153,",
  "rgba(139,92,246,",
];

function cellPts(col: number, row: number) {
  return [
    `${col * W + row * S},${row * H}`,
    `${(col + 1) * W + row * S},${row * H}`,
    `${(col + 1) * W + (row + 1) * S},${(row + 1) * H}`,
    `${col * W + (row + 1) * S},${(row + 1) * H}`,
  ].join(" ");
}

interface LitCell { key: string; col: number; row: number; color: string }

export function ParallelogramPattern() {
  const [dims, setDims] = useState({ w: 1440, h: 900 });
  const [litCells, setLitCells] = useState<LitCell[]>([]);

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const rows      = Math.ceil(dims.h / H) + 1;
  const extraLeft = Math.ceil((rows * S) / W) + 2;
  const totalCols = Math.ceil(dims.w / W) + extraLeft + 2;
  const colStart  = -extraLeft;

  // Fire 3 cells every 10 seconds
  useEffect(() => {
    const fire = () => {
      const picks: LitCell[] = Array.from({ length: 3 }, () => {
        const r     = Math.floor(Math.random() * rows);
        const c     = colStart + Math.floor(Math.random() * totalCols);
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        return { key: `${c},${r}-${Date.now()}-${Math.random()}`, col: c, row: r, color };
      });
      setLitCells(prev => [...prev, ...picks]);
      setTimeout(() => {
        const keys = new Set(picks.map(p => p.key));
        setLitCells(prev => prev.filter(x => !keys.has(x.key)));
      }, 2500);
    };

    const interval = setInterval(fire, 10_000);
    fire();
    return () => clearInterval(interval);
  }, [rows, totalCols, colStart]);

  // Horizontal lines — drawn once each
  const hLines = Array.from({ length: rows + 1 }, (_, r) => ({
    x1: colStart * W + r * S,
    y1: r * H,
    x2: (colStart + totalCols) * W + r * S,
    y2: r * H,
  }));

  // Diagonal lines — drawn once each (top to bottom of viewport)
  const dLines = Array.from({ length: totalCols + 1 }, (_, i) => {
    const c = colStart + i;
    return {
      x1: c * W,
      y1: 0,
      x2: c * W + rows * S,
      y2: rows * H,
    };
  });

  const stroke = "rgba(255,255,255,0.03)";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" className="absolute inset-0">

        {hLines.map((l, i) => (
          <line key={`h${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={stroke} strokeWidth="0.5" />
        ))}

        {dLines.map((l, i) => (
          <line key={`d${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={stroke} strokeWidth="0.5" />
        ))}

        {litCells.map(({ key, col, row, color }) => (
          <motion.polygon
            key={key}
            points={cellPts(col, row)}
            stroke={`${color}0.5)`}
            strokeWidth="0.8"
            initial={{ fill: `${color}0)`, opacity: 0 }}
            animate={{
              fill:    [`${color}0)`, `${color}0.13)`, `${color}0.08)`, `${color}0)`],
              opacity: [0, 1, 0.9, 0],
            }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
