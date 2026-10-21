// Decorative "neural network" backdrop echoing the Future Labs Africa poster/logo mesh.
const NODES: [number, number][] = [
  [40, 60], [120, 30], [200, 80], [290, 40], [370, 90], [450, 50], [530, 100], [610, 60],
  [80, 150], [170, 170], [260, 140], [340, 190], [430, 150], [510, 200], [590, 160],
  [30, 250], [130, 270], [220, 240], [310, 290], [400, 250], [490, 300], [570, 260], [640, 230],
];
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [0, 8], [1, 8], [1, 9], [2, 9], [2, 10], [3, 10], [3, 11], [4, 11],
  [4, 12], [5, 12], [5, 13], [6, 13], [6, 14], [7, 14], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [8, 15],
  [8, 16], [9, 16], [9, 17], [10, 17], [10, 18], [11, 18], [11, 19], [12, 19], [12, 20], [13, 20], [13, 21], [14, 21], [14, 22],
  [15, 16], [16, 17], [17, 18], [18, 19], [19, 20], [20, 21], [21, 22],
];

export function AfricaNet({ className = "" }: { className?: string }) {
  return (
    <svg className={`net ${className}`} viewBox="0 0 680 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.5">
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
        ))}
      </g>
      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 3.5 : 2} className={i % 4 === 0 ? "net__dot net__dot--lime" : "net__dot"} />
      ))}
    </svg>
  );
}
