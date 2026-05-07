// // import React, { useEffect, useMemo, useState } from "react";

// // const SLIDE_DURATION = 3200;
// // const BASE_PATH = "/GoogleIO2026Images";

// // const imagePath = (fileName) => `${BASE_PATH}/images/${fileName}`;

// // const stages = [
// //   { id: 10, src: imagePath("10.png"), color: "#e8ecff", accent: "#8b5cf6" },
// //   { id: 9, src: imagePath("9.png"), color: "#9ff7ff", accent: "#22d3ee" },
// //   { id: 8, src: imagePath("8.png"), color: "#ffd89b", accent: "#f59e0b" },
// //   { id: 7, src: imagePath("7.png"), color: "#ffe066", accent: "#facc15" },
// //   { id: 6, src: imagePath("6.png"), color: "#c7efff", accent: "#38bdf8" },
// //   { id: 5, src: imagePath("5.png"), color: "#66dcff", accent: "#2563eb" },
// //   { id: 4, src: imagePath("4.png"), color: "#c7e8ff", accent: "#60a5fa" },
// //   { id: 3, src: imagePath("3.png"), color: "#ff875c", accent: "#ef4444" },
// //   { id: 2, src: imagePath("2.png"), color: "#83dcff", accent: "#0ea5e9" },
// //   { id: 1, src: imagePath("1.png"), color: "#8cffaa", accent: "#22c55e" },
// // ];

// // const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

// // function ParticleNumber({ number, color }) {
// //   const particles = useMemo(() => {
// //     return Array.from({ length: 90 }, (_, i) => ({
// //       id: i,
// //       left: 18 + Math.random() * 64,
// //       top: 18 + Math.random() * 64,
// //       delay: Math.random() * 0.8,
// //       size: 8 + Math.random() * 11,
// //       color: googleColors[i % googleColors.length],
// //       glyph: ["✦", "◆", "●", "G", "AI", "◇"][i % 6],
// //     }));
// //   }, [number]);

// //   return (
// //     <div className="particleLayer" key={number}>
// //       <div
// //         className="particleNumberGhost"
// //         style={{
// //           color,
// //           textShadow: `0 0 24px ${color}, 0 0 70px ${color}`,
// //         }}
// //       >
// //         {number}
// //       </div>

// //       {particles.map((p) => (
// //         <span
// //           key={p.id}
// //           className="particleGlyph"
// //           style={{
// //             left: `${p.left}%`,
// //             top: `${p.top}%`,
// //             width: p.size,
// //             height: p.size,
// //             color: p.color,
// //             animationDelay: `${p.delay}s`,
// //             textShadow: `0 0 14px ${p.color}`,
// //           }}
// //         >
// //           {p.glyph}
// //         </span>
// //       ))}
// //     </div>
// //   );
// // }

// // export default function App() {
// //   const [index, setIndex] = useState(0);
// //   const [done, setDone] = useState(false);

// //   const current = stages[index];

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       if (index < stages.length - 1) {
// //         setIndex((prev) => prev + 1);
// //       } else {
// //         setDone(true);
// //       }
// //     }, SLIDE_DURATION);

// //     return () => clearTimeout(timer);
// //   }, [index]);

// //   const progress = ((index + 1) / stages.length) * 100;

// //   return (
// //     <main className="appRoot">
// //       <div
// //         className="mapBackground"
// //         style={{
// //           backgroundImage: `
// //             linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.78)),
// //             url("${imagePath("mountain-view-map.png")}")
// //           `,
// //         }}
// //       />

// //       <div
// //         className="ambientGlow"
// //         style={{
// //           background: `
// //             radial-gradient(circle at 45% 40%, ${current.color}44, transparent 36%),
// //             radial-gradient(circle at 70% 65%, ${current.accent}33, transparent 42%)
// //           `,
// //         }}
// //       />

// //       <section
// //         className="cinemaFrame"
// //         style={{
// //           borderColor: `${current.color}44`,
// //           boxShadow: `
// //             0 0 70px ${current.color}22,
// //             0 0 150px rgba(0,0,0,0.95),
// //             inset 0 0 80px rgba(255,255,255,0.04)
// //           `,
// //         }}
// //       >
// //         {stages.map((stage, i) => {
// //           const active = i === index;

// //           return (
// //             <div
// //               key={stage.id}
// //               className="slide"
// //               style={{
// //                 opacity: active ? 1 : 0,
// //                 transform: active ? "scale(1)" : "scale(1.015)",
// //                 filter: active
// //                   ? "brightness(0.92) contrast(1.08) saturate(1.12)"
// //                   : "brightness(0.35) blur(12px)",
// //               }}
// //             >
// //               <img src={stage.src} alt={`Countdown ${stage.id}`} />

// //               <div className="brightnessControl" />
// //               <div
// //                 className="colorGrade"
// //                 style={{
// //                   background: `
// //                     radial-gradient(circle at center, ${stage.color}24, transparent 42%),
// //                     linear-gradient(135deg, ${stage.accent}16, transparent 58%)
// //                   `,
// //                 }}
// //               />
// //             </div>
// //           );
// //         })}

// //         <ParticleNumber number={current.id} color={current.color} />

// //         <div className="lightSweep" />
// //         <div className="particleDust" />
// //         <div className="scanLine" style={{ background: current.color }} />

// //         <div className="topBar" />
// //         <div className="bottomBar" />
// //         <div className="vignette" />

// //         <div className="header">
// //           <div>Google I/O 2026 Countdown</div>
// //           <span>Mountain View · California</span>
// //         </div>

// //         <div className="mapPin">37.4220° N · 122.0841° W</div>

// //         <div className="dots">
// //           {stages.map((stage, i) => (
// //             <span
// //               key={stage.id}
// //               style={{
// //                 width: i === index ? 30 : 7,
// //                 background:
// //                   i <= index ? current.color : "rgba(255,255,255,0.18)",
// //                 boxShadow: i === index ? `0 0 16px ${current.color}` : "none",
// //               }}
// //             />
// //           ))}
// //         </div>

// //         <div className="progressTrack">
// //           <div
// //             className="progressFill"
// //             style={{
// //               width: `${progress}%`,
// //               background: `linear-gradient(90deg, ${current.accent}, ${current.color})`,
// //               boxShadow: `0 0 24px ${current.color}`,
// //             }}
// //           />
// //         </div>

// //         {done && (
// //           <div className="finalOverlay">
// //             <h1>Google I/O</h1>
// //             <p>2026</p>
// //           </div>
// //         )}
// //       </section>

// //       <style>{`
// //         html, body, #root {
// //           margin: 0;
// //           width: 100%;
// //           height: 100%;
// //           overflow: hidden;
// //           background: #000;
// //         }

// //         * {
// //           box-sizing: border-box;
// //         }

// //         .appRoot {
// //           position: fixed;
// //           inset: 0;
// //           width: 100vw;
// //           height: 100vh;
// //           overflow: hidden;
// //           background: #000;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
// //         }

// //         .mapBackground {
// //           position: absolute;
// //           inset: 0;
// //           background-size: cover;
// //           background-position: center;
// //           filter: saturate(0.8) contrast(1.15) brightness(0.8);
// //           transform: scale(1.08);
// //         }

// //         .ambientGlow {
// //           position: absolute;
// //           inset: -20%;
// //           filter: blur(80px);
// //           opacity: 0.75;
// //           animation: slowSpin 26s linear infinite;
// //         }

// //         .cinemaFrame {
// //           position: relative;
// //           width: min(94vw, 1500px);
// //           height: min(94vh, calc(min(94vw, 1500px) * 9 / 16));
// //           aspect-ratio: 16 / 9;
// //           overflow: hidden;
// //           border-radius: 28px;
// //           border: 1px solid;
// //           background: rgba(0,0,0,0.85);
// //         }

// //         .slide {
// //           position: absolute;
// //           inset: 0;
// //           transition:
// //             opacity 950ms ease,
// //             transform 3200ms cubic-bezier(.19,1,.22,1),
// //             filter 950ms ease;
// //           will-change: opacity, transform, filter;
// //         }

// //         .slide img {
// //           width: 100%;
// //           height: 100%;
// //           object-fit: contain;
// //           display: block;
// //           user-select: none;
// //           background: rgba(0,0,0,0.7);
// //         }

// //         .brightnessControl {
// //           position: absolute;
// //           inset: 0;
// //           background:
// //             radial-gradient(circle at center, rgba(0,0,0,0.08), rgba(0,0,0,0.28) 70%),
// //             linear-gradient(to bottom, rgba(0,0,0,0.12), transparent 30%, rgba(0,0,0,0.2));
// //           mix-blend-mode: multiply;
// //           pointer-events: none;
// //         }

// //         .colorGrade {
// //           position: absolute;
// //           inset: 0;
// //           opacity: 0.38;
// //           mix-blend-mode: screen;
// //           pointer-events: none;
// //         }

// //         .particleLayer {
// //           position: absolute;
// //           inset: 0;
// //           pointer-events: none;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           mix-blend-mode: screen;
// //         }

// //         .particleNumberGhost {
// //           position: absolute;
// //           font-size: clamp(160px, 30vw, 520px);
// //           font-weight: 900;
// //           line-height: 1;
// //           opacity: 0.12;
// //           transform: scale(0.96);
// //           animation: ghostPulse 1500ms ease-in-out infinite alternate;
// //         }

// //         .particleGlyph {
// //           position: absolute;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           font-size: 10px;
// //           font-weight: 800;
// //           border-radius: 999px;
// //           opacity: 0;
// //           animation: splashToNumber 1400ms cubic-bezier(.19,1,.22,1) forwards,
// //                      shimmer 2200ms ease-in-out infinite alternate;
// //         }

// //         .lightSweep {
// //           position: absolute;
// //           inset: 0;
// //           pointer-events: none;
// //           opacity: 0.22;
// //           background: linear-gradient(105deg, transparent 0%, transparent 42%, rgba(255,255,255,0.16) 50%, transparent 58%, transparent 100%);
// //           animation: lightSweep 4.4s linear infinite;
// //         }

// //         .particleDust {
// //           position: absolute;
// //           inset: 0;
// //           pointer-events: none;
// //           opacity: 0.22;
// //           background-image: radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px);
// //           background-size: 28px 28px;
// //           animation: particles 6s linear infinite;
// //         }

// //         .scanLine {
// //           position: absolute;
// //           inset: 0;
// //           pointer-events: none;
// //           opacity: 0.12;
// //           mask-image: linear-gradient(to bottom, transparent, black, transparent);
// //           animation: scan 3.3s ease-in-out infinite;
// //         }

// //         .topBar {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 13%;
// //           background: linear-gradient(to bottom, black, rgba(0,0,0,0.72), transparent);
// //         }

// //         .bottomBar {
// //           position: absolute;
// //           bottom: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 17%;
// //           background: linear-gradient(to top, black, rgba(0,0,0,0.78), transparent);
// //         }

// //         .vignette {
// //           position: absolute;
// //           inset: 0;
// //           pointer-events: none;
// //           box-shadow: inset 0 0 180px rgba(0,0,0,0.95);
// //         }

// //         .header {
// //           position: absolute;
// //           top: 24px;
// //           left: 50%;
// //           transform: translateX(-50%);
// //           text-align: center;
// //           pointer-events: none;
// //           color: rgba(255,255,255,0.5);
// //           text-transform: uppercase;
// //           letter-spacing: 0.55em;
// //           font-size: 10px;
// //           white-space: nowrap;
// //         }

// //         .header span {
// //           display: block;
// //           margin-top: 8px;
// //           font-size: 9px;
// //           letter-spacing: 0.35em;
// //           color: rgba(255,255,255,0.32);
// //         }

// //         .mapPin {
// //           position: absolute;
// //           right: 28px;
// //           bottom: 34px;
// //           color: rgba(255,255,255,0.48);
// //           font-size: 10px;
// //           letter-spacing: 0.18em;
// //           z-index: 20;
// //         }

// //         .dots {
// //           position: absolute;
// //           bottom: 22px;
// //           left: 50%;
// //           transform: translateX(-50%);
// //           display: flex;
// //           gap: 8px;
// //           z-index: 30;
// //         }

// //         .dots span {
// //           height: 6px;
// //           border-radius: 999px;
// //           transition: all 500ms ease;
// //         }

// //         .progressTrack {
// //           position: absolute;
// //           bottom: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 4px;
// //           background: rgba(255,255,255,0.1);
// //         }

// //         .progressFill {
// //           height: 100%;
// //           transition: width 700ms linear;
// //         }

// //         .finalOverlay {
// //           position: absolute;
// //           inset: 0;
// //           z-index: 80;
// //           background: rgba(0,0,0,0.55);
// //           backdrop-filter: blur(14px);
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           justify-content: center;
// //           animation: fadeIn 900ms ease-out forwards;
// //         }

// //         .finalOverlay h1 {
// //           margin: 0;
// //           color: white;
// //           font-size: clamp(48px, 8vw, 120px);
// //           font-weight: 900;
// //           letter-spacing: -0.05em;
// //           text-shadow: 0 0 45px rgba(255,255,255,0.85);
// //         }

// //         .finalOverlay p {
// //           margin-top: 16px;
// //           color: rgba(255,255,255,0.7);
// //           font-size: 14px;
// //           letter-spacing: 0.65em;
// //         }

// //         @keyframes splashToNumber {
// //           0% {
// //             opacity: 0;
// //             transform: translate3d(
// //               calc((50vw - 100%) * var(--x, 1)),
// //               calc((50vh - 100%) * var(--y, 1)),
// //               0
// //             ) scale(0.2) rotate(180deg);
// //           }

// //           60% {
// //             opacity: 1;
// //           }

// //           100% {
// //             opacity: 0.9;
// //             transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
// //           }
// //         }

// //         @keyframes shimmer {
// //           from { filter: brightness(0.9); }
// //           to { filter: brightness(1.5); }
// //         }

// //         @keyframes ghostPulse {
// //           from { opacity: 0.08; transform: scale(0.94); }
// //           to { opacity: 0.16; transform: scale(1.01); }
// //         }

// //         @keyframes lightSweep {
// //           0% { transform: translateX(-140%) skewX(-14deg); }
// //           100% { transform: translateX(140%) skewX(-14deg); }
// //         }

// //         @keyframes particles {
// //           0% { transform: translate3d(0, 0, 0); }
// //           100% { transform: translate3d(-28px, -28px, 0); }
// //         }

// //         @keyframes scan {
// //           0% { transform: translateY(-100%); }
// //           100% { transform: translateY(100%); }
// //         }

// //         @keyframes slowSpin {
// //           0% { transform: rotate(0deg) scale(1.15); }
// //           100% { transform: rotate(360deg) scale(1.15); }
// //         }

// //         @keyframes fadeIn {
// //           from { opacity: 0; transform: scale(1.04); }
// //           to { opacity: 1; transform: scale(1); }
// //         }

// //         @media (max-width: 768px) {
// //           .header {
// //             font-size: 8px;
// //             letter-spacing: 0.28em;
// //           }

// //           .mapPin {
// //             display: none;
// //           }
// //         }
// //       `}</style>
// //     </main>
// //   );
// // }


// import React, { useEffect, useMemo, useState } from "react";

// const SLIDE_DURATION = 4200;
// const BASE_PATH = "/GoogleIO2026Images";
// const imagePath = (fileName) => `${BASE_PATH}/images/${fileName}`;

// const stages = [
//   { id: 10, src: imagePath("10.png"), theme: "quantum", label: "Quantum AI", color: "#e8ecff", accent: "#8b5cf6" },
//   { id: 9, src: imagePath("9.png"), theme: "deepmind", label: "DeepMind", color: "#9ff7ff", accent: "#22d3ee" },
//   { id: 8, src: imagePath("8.png"), theme: "human", label: "Human Touch / Android", color: "#ffd89b", accent: "#34A853" },
//   { id: 7, src: imagePath("7.png"), theme: "sun", label: "Search / Sunlight", color: "#ffe066", accent: "#facc15" },
//   { id: 6, src: imagePath("6.png"), theme: "moon", label: "Maps / Moon", color: "#c7efff", accent: "#38bdf8" },
//   { id: 5, src: imagePath("5.png"), theme: "space", label: "Vertex AI / Space", color: "#66dcff", accent: "#2563eb" },
//   { id: 4, src: imagePath("4.png"), theme: "air", label: "Gemini / Air", color: "#c7e8ff", accent: "#60a5fa" },
//   { id: 3, src: imagePath("3.png"), theme: "fire", label: "TPU / Fire", color: "#ff875c", accent: "#ef4444" },
//   { id: 2, src: imagePath("2.png"), theme: "water", label: "Cloud / Water", color: "#83dcff", accent: "#0ea5e9" },
//   { id: 1, src: imagePath("1.png"), theme: "earth", label: "Google Earth", color: "#8cffaa", accent: "#22c55e" },
// ];

// const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

// function StageMotion({ theme, color, accent }) {
//   return (
//     <div className={`stageMotion ${theme}`}>
//       <div className="motionLayer layerA" style={{ "--color": color, "--accent": accent }} />
//       <div className="motionLayer layerB" style={{ "--color": color, "--accent": accent }} />
//       <div className="motionLayer layerC" style={{ "--color": color, "--accent": accent }} />
//     </div>
//   );
// }

// function ParticleNumber({ number, color }) {
//   const particles = useMemo(() => {
//     return Array.from({ length: 70 }, (_, i) => ({
//       id: i,
//       left: 22 + Math.random() * 56,
//       top: 22 + Math.random() * 56,
//       delay: Math.random() * 0.9,
//       size: 6 + Math.random() * 9,
//       color: googleColors[i % googleColors.length],
//       glyph: ["✦", "◆", "●", "G", "AI", "◇"][i % 6],
//     }));
//   }, [number]);

//   return (
//     <div className="particleLayer" key={number}>
//       <div className="particleNumberGhost" style={{ color, textShadow: `0 0 24px ${color}, 0 0 70px ${color}` }}>
//         {number}
//       </div>

//       {particles.map((p) => (
//         <span
//           key={p.id}
//           className="particleGlyph"
//           style={{
//             left: `${p.left}%`,
//             top: `${p.top}%`,
//             width: p.size,
//             height: p.size,
//             color: p.color,
//             animationDelay: `${p.delay}s`,
//             textShadow: `0 0 14px ${p.color}`,
//           }}
//         >
//           {p.glyph}
//         </span>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   const [index, setIndex] = useState(0);
//   const [done, setDone] = useState(false);

//   const current = stages[index];
//   const progress = ((index + 1) / stages.length) * 100;

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (index < stages.length - 1) setIndex((prev) => prev + 1);
//       else setDone(true);
//     }, SLIDE_DURATION);

//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <main className="appRoot">
//       <div
//         className="mapBackground"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(0,0,0,0.66), rgba(0,0,0,0.76)),
//             url("${imagePath("mountain-view-map.png")}")
//           `,
//         }}
//       />

//       <div
//         className="ambientGlow"
//         style={{
//           background: `
//             radial-gradient(circle at 45% 40%, ${current.color}44, transparent 36%),
//             radial-gradient(circle at 70% 65%, ${current.accent}33, transparent 42%)
//           `,
//         }}
//       />

//       <section
//         className="cinemaFrame"
//         style={{
//           borderColor: `${current.color}44`,
//           boxShadow: `
//             0 0 70px ${current.color}22,
//             0 0 150px rgba(0,0,0,0.95),
//             inset 0 0 80px rgba(255,255,255,0.04)
//           `,
//         }}
//       >
//         {stages.map((stage, i) => {
//           const active = i === index;

//           return (
//             <div
//               key={stage.id}
//               className="slide"
//               style={{
//                 opacity: active ? 1 : 0,
//                 transform: active ? "scale(1.012)" : "scale(1.04)",
//                 filter: active
//                   ? "brightness(0.9) contrast(1.1) saturate(1.14)"
//                   : "brightness(0.25) blur(18px)",
//               }}
//             >
//               <img src={stage.src} alt={`Countdown ${stage.id}`} />
//               {active && <StageMotion theme={stage.theme} color={stage.color} accent={stage.accent} />}

//               <div className="brightnessControl" />
//               <div
//                 className="colorGrade"
//                 style={{
//                   background: `
//                     radial-gradient(circle at center, ${stage.color}22, transparent 42%),
//                     linear-gradient(135deg, ${stage.accent}16, transparent 58%)
//                   `,
//                 }}
//               />
//             </div>
//           );
//         })}

//         <ParticleNumber number={current.id} color={current.color} />

//         <div className="lightSweep" />
//         <div className="particleDust" />
//         <div className="topBar" />
//         <div className="bottomBar" />
//         <div className="vignette" />

//         <div className="header">
//           <div>Google I/O 2026 Countdown</div>
//           <span>{current.label}</span>
//         </div>

//         <div className="mapPin">37.4220° N · 122.0841° W</div>

//         <div className="dots">
//           {stages.map((stage, i) => (
//             <span
//               key={stage.id}
//               style={{
//                 width: i === index ? 30 : 7,
//                 background: i <= index ? current.color : "rgba(255,255,255,0.18)",
//                 boxShadow: i === index ? `0 0 16px ${current.color}` : "none",
//               }}
//             />
//           ))}
//         </div>

//         <div className="progressTrack">
//           <div
//             className="progressFill"
//             style={{
//               width: `${progress}%`,
//               background: `linear-gradient(90deg, ${current.accent}, ${current.color})`,
//               boxShadow: `0 0 24px ${current.color}`,
//             }}
//           />
//         </div>

//         {done && (
//           <div className="finalOverlay">
//             <h1>Google I/O</h1>
//             <p>2026</p>
//           </div>
//         )}
//       </section>

//       <style>{`
//         html, body, #root {
//           margin: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//           background: #000;
//         }

//         * { box-sizing: border-box; }

//         .appRoot {
//           position: fixed;
//           inset: 0;
//           width: 100vw;
//           height: 100vh;
//           overflow: hidden;
//           background: #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
//         }

//         .mapBackground {
//           position: absolute;
//           inset: -6%;
//           background-size: cover;
//           background-position: center;
//           filter: saturate(0.9) contrast(1.12) brightness(0.78);
//           transform: scale(1.08);
//           animation: mapDrift 18s ease-in-out infinite alternate;
//         }

//         .ambientGlow {
//           position: absolute;
//           inset: -20%;
//           filter: blur(80px);
//           opacity: 0.75;
//           animation: slowSpin 26s linear infinite;
//         }

//         .cinemaFrame {
//           position: relative;
//           width: min(94vw, 1500px);
//           height: min(94vh, calc(min(94vw, 1500px) * 9 / 16));
//           aspect-ratio: 16 / 9;
//           overflow: hidden;
//           border-radius: 28px;
//           border: 1px solid;
//           background: rgba(0,0,0,0.85);
//         }

//         .slide {
//           position: absolute;
//           inset: 0;
//           transition:
//             opacity 1200ms ease,
//             transform 4200ms cubic-bezier(.19,1,.22,1),
//             filter 1200ms ease;
//           will-change: opacity, transform, filter;
//         }

//         .slide img {
//           width: 100%;
//           height: 100%;
//           object-fit: contain;
//           display: block;
//           user-select: none;
//           background: rgba(0,0,0,0.7);
//         }

//         .stageMotion {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//           overflow: hidden;
//           mix-blend-mode: screen;
//         }

//         .motionLayer {
//           position: absolute;
//           inset: -20%;
//           opacity: 0.35;
//         }

//         .quantum .layerA {
//           background: repeating-radial-gradient(circle at center, transparent 0 28px, var(--color) 30px 32px);
//           animation: quantumPulse 5s ease-in-out infinite;
//         }
//         .quantum .layerB {
//           background: conic-gradient(from 0deg, transparent, var(--accent), transparent, var(--color), transparent);
//           animation: spinFast 8s linear infinite;
//           opacity: 0.25;
//         }

//         .deepmind .layerA {
//           background-image:
//             radial-gradient(circle, var(--color) 1px, transparent 2px),
//             linear-gradient(45deg, transparent 45%, var(--accent) 50%, transparent 55%);
//           background-size: 42px 42px, 160px 160px;
//           animation: neuralFlow 5s linear infinite;
//         }

//         .human .layerA {
//           background: radial-gradient(circle at center, var(--accent), transparent 28%);
//           animation: heartbeat 1.8s ease-in-out infinite;
//           opacity: 0.22;
//         }

//         .sun .layerA {
//           background: repeating-conic-gradient(from 0deg, var(--color) 0deg 4deg, transparent 5deg 14deg);
//           animation: spinSlow 12s linear infinite;
//           opacity: 0.28;
//         }
//         .sun .layerB {
//           background: radial-gradient(circle at 50% 45%, var(--color), transparent 42%);
//           animation: sunBreath 2.5s ease-in-out infinite alternate;
//         }

//         .moon .layerA {
//           background-image: radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 2px);
//           background-size: 38px 38px;
//           animation: starDrift 9s linear infinite;
//         }
//         .moon .layerB {
//           border: 1px solid var(--color);
//           border-radius: 50%;
//           inset: 12%;
//           animation: orbitLine 7s linear infinite;
//         }

//         .space .layerA {
//           background-image:
//             radial-gradient(circle, var(--color) 1px, transparent 2px),
//             linear-gradient(60deg, transparent 48%, var(--accent) 50%, transparent 52%);
//           background-size: 54px 54px, 220px 220px;
//           animation: constellationMove 8s linear infinite;
//         }

//         .air .layerA {
//           background: repeating-linear-gradient(115deg, transparent 0 42px, var(--color) 44px 46px, transparent 48px 80px);
//           animation: airFlow 5s ease-in-out infinite;
//         }

//         .fire .layerA {
//           background-image: radial-gradient(circle, var(--accent) 1px, transparent 3px);
//           background-size: 26px 26px;
//           animation: emberRise 3.2s linear infinite;
//           opacity: 0.42;
//         }
//         .fire .layerB {
//           background: radial-gradient(circle at 50% 70%, var(--accent), transparent 40%);
//           animation: firePulse 1.4s ease-in-out infinite alternate;
//         }

//         .water .layerA {
//           background: repeating-radial-gradient(ellipse at center, transparent 0 26px, var(--color) 28px 30px);
//           animation: waterRipple 4.5s ease-in-out infinite;
//         }
//         .water .layerB {
//           background: linear-gradient(90deg, transparent, var(--accent), transparent);
//           animation: waterFlow 5s ease-in-out infinite;
//         }

//         .earth .layerA {
//           background:
//             radial-gradient(circle at 50% 50%, transparent 25%, var(--accent) 26%, transparent 28%),
//             linear-gradient(90deg, transparent, var(--color), transparent);
//           animation: earthOrbit 6s linear infinite;
//         }

//         .brightnessControl {
//           position: absolute;
//           inset: 0;
//           background:
//             radial-gradient(circle at center, rgba(0,0,0,0.05), rgba(0,0,0,0.3) 72%),
//             linear-gradient(to bottom, rgba(0,0,0,0.16), transparent 32%, rgba(0,0,0,0.24));
//           mix-blend-mode: multiply;
//           pointer-events: none;
//         }

//         .colorGrade {
//           position: absolute;
//           inset: 0;
//           opacity: 0.34;
//           mix-blend-mode: screen;
//           pointer-events: none;
//         }

//         .particleLayer {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           mix-blend-mode: screen;
//         }

//         .particleNumberGhost {
//           position: absolute;
//           font-size: clamp(160px, 30vw, 520px);
//           font-weight: 900;
//           line-height: 1;
//           opacity: 0.09;
//           transform: scale(0.96);
//           animation: ghostPulse 1500ms ease-in-out infinite alternate;
//         }

//         .particleGlyph {
//           position: absolute;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 10px;
//           font-weight: 800;
//           border-radius: 999px;
//           opacity: 0;
//           animation:
//             splashToNumber 1400ms cubic-bezier(.19,1,.22,1) forwards,
//             shimmer 2200ms ease-in-out infinite alternate;
//         }

//         .lightSweep {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//           opacity: 0.18;
//           background: linear-gradient(105deg, transparent 0%, transparent 42%, rgba(255,255,255,0.16) 50%, transparent 58%, transparent 100%);
//           animation: lightSweep 4.4s linear infinite;
//         }

//         .particleDust {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//           opacity: 0.16;
//           background-image: radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px);
//           background-size: 28px 28px;
//           animation: particles 6s linear infinite;
//         }

//         .topBar {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 13%;
//           background: linear-gradient(to bottom, black, rgba(0,0,0,0.72), transparent);
//         }

//         .bottomBar {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 17%;
//           background: linear-gradient(to top, black, rgba(0,0,0,0.78), transparent);
//         }

//         .vignette {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//           box-shadow: inset 0 0 180px rgba(0,0,0,0.95);
//         }

//         .header {
//           position: absolute;
//           top: 24px;
//           left: 50%;
//           transform: translateX(-50%);
//           text-align: center;
//           pointer-events: none;
//           color: rgba(255,255,255,0.5);
//           text-transform: uppercase;
//           letter-spacing: 0.55em;
//           font-size: 10px;
//           white-space: nowrap;
//         }

//         .header span {
//           display: block;
//           margin-top: 8px;
//           font-size: 9px;
//           letter-spacing: 0.35em;
//           color: rgba(255,255,255,0.34);
//         }

//         .mapPin {
//           position: absolute;
//           right: 28px;
//           bottom: 34px;
//           color: rgba(255,255,255,0.48);
//           font-size: 10px;
//           letter-spacing: 0.18em;
//           z-index: 20;
//         }

//         .dots {
//           position: absolute;
//           bottom: 22px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 8px;
//           z-index: 30;
//         }

//         .dots span {
//           height: 6px;
//           border-radius: 999px;
//           transition: all 500ms ease;
//         }

//         .progressTrack {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background: rgba(255,255,255,0.1);
//         }

//         .progressFill {
//           height: 100%;
//           transition: width 700ms linear;
//         }

//         .finalOverlay {
//           position: absolute;
//           inset: 0;
//           z-index: 80;
//           background: rgba(0,0,0,0.55);
//           backdrop-filter: blur(14px);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           animation: fadeIn 900ms ease-out forwards;
//         }

//         .finalOverlay h1 {
//           margin: 0;
//           color: white;
//           font-size: clamp(48px, 8vw, 120px);
//           font-weight: 900;
//           letter-spacing: -0.05em;
//           text-shadow: 0 0 45px rgba(255,255,255,0.85);
//         }

//         .finalOverlay p {
//           margin-top: 16px;
//           color: rgba(255,255,255,0.7);
//           font-size: 14px;
//           letter-spacing: 0.65em;
//         }

//         @keyframes mapDrift {
//           from { transform: scale(1.08) translate3d(-1%, -1%, 0); }
//           to { transform: scale(1.13) translate3d(1%, 1%, 0); }
//         }

//         @keyframes quantumPulse {
//           0% { transform: scale(0.85) rotate(0deg); opacity: 0.12; }
//           50% { transform: scale(1.12) rotate(8deg); opacity: 0.36; }
//           100% { transform: scale(0.9) rotate(-6deg); opacity: 0.18; }
//         }

//         @keyframes neuralFlow {
//           from { background-position: 0 0, 0 0; }
//           to { background-position: 84px 84px, 220px 220px; }
//         }

//         @keyframes heartbeat {
//           0%, 100% { transform: scale(0.92); opacity: 0.16; }
//           50% { transform: scale(1.12); opacity: 0.34; }
//         }

//         @keyframes sunBreath {
//           from { transform: scale(0.92); opacity: 0.18; }
//           to { transform: scale(1.16); opacity: 0.35; }
//         }

//         @keyframes spinSlow {
//           from { transform: rotate(0deg) scale(1.1); }
//           to { transform: rotate(360deg) scale(1.1); }
//         }

//         @keyframes spinFast {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes starDrift {
//           from { background-position: 0 0; }
//           to { background-position: -76px -76px; }
//         }

//         @keyframes orbitLine {
//           from { transform: rotate(0deg) scale(0.95); opacity: 0.1; }
//           to { transform: rotate(360deg) scale(1.04); opacity: 0.28; }
//         }

//         @keyframes constellationMove {
//           from { background-position: 0 0, 0 0; }
//           to { background-position: 108px 108px, 220px 220px; }
//         }

//         @keyframes airFlow {
//           0% { transform: translateX(-6%) skewX(-8deg); opacity: 0.12; }
//           50% { opacity: 0.32; }
//           100% { transform: translateX(6%) skewX(8deg); opacity: 0.16; }
//         }

//         @keyframes emberRise {
//           from { background-position: 0 160px; }
//           to { background-position: 0 -160px; }
//         }

//         @keyframes firePulse {
//           from { transform: scale(0.9); opacity: 0.16; }
//           to { transform: scale(1.12); opacity: 0.34; }
//         }

//         @keyframes waterRipple {
//           0% { transform: scale(0.8); opacity: 0.12; }
//           50% { transform: scale(1.08); opacity: 0.28; }
//           100% { transform: scale(1.22); opacity: 0.08; }
//         }

//         @keyframes waterFlow {
//           from { transform: translateX(-35%) rotate(-6deg); opacity: 0.1; }
//           to { transform: translateX(35%) rotate(6deg); opacity: 0.24; }
//         }

//         @keyframes earthOrbit {
//           from { transform: rotate(0deg) scale(0.9); opacity: 0.14; }
//           to { transform: rotate(360deg) scale(1.08); opacity: 0.28; }
//         }

//         @keyframes splashToNumber {
//           0% {
//             opacity: 0;
//             transform: translate3d(
//               calc((50vw - 100%) * var(--x, 1)),
//               calc((50vh - 100%) * var(--y, 1)),
//               0
//             ) scale(0.2) rotate(180deg);
//           }
//           60% { opacity: 1; }
//           100% {
//             opacity: 0.82;
//             transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
//           }
//         }

//         @keyframes shimmer {
//           from { filter: brightness(0.85); }
//           to { filter: brightness(1.25); }
//         }

//         @keyframes ghostPulse {
//           from { opacity: 0.06; transform: scale(0.94); }
//           to { opacity: 0.12; transform: scale(1.01); }
//         }

//         @keyframes lightSweep {
//           0% { transform: translateX(-140%) skewX(-14deg); }
//           100% { transform: translateX(140%) skewX(-14deg); }
//         }

//         @keyframes particles {
//           0% { transform: translate3d(0, 0, 0); }
//           100% { transform: translate3d(-28px, -28px, 0); }
//         }

//         @keyframes slowSpin {
//           0% { transform: rotate(0deg) scale(1.15); }
//           100% { transform: rotate(360deg) scale(1.15); }
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: scale(1.04); }
//           to { opacity: 1; transform: scale(1); }
//         }

//         @media (max-width: 768px) {
//           .header {
//             font-size: 8px;
//             letter-spacing: 0.28em;
//           }

//           .mapPin {
//             display: none;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";

const SLIDE_DURATION = 6000; // 10 stages x 6 sec = 60 sec total
const BASE_PATH = "/GoogleIO2026Images";
const imagePath = (fileName) => `${BASE_PATH}/images/${fileName}`;

const stages = [
  { id: 10, src: imagePath("10.png"), theme: "quantum", label: "QUANTUM AI", color: "#e8ecff", accent: "#8b5cf6" },
  { id: 9, src: imagePath("9.png"), theme: "deepmind", label: "DEEPMIND", color: "#9ff7ff", accent: "#22d3ee" },
  { id: 8, src: imagePath("8.png"), theme: "human", label: "ANDROID", color: "#ffd89b", accent: "#34A853" },
  { id: 7, src: imagePath("7.png"), theme: "sun", label: "GOOGLE SEARCH", color: "#ffe066", accent: "#facc15" },
  { id: 6, src: imagePath("6.png"), theme: "moon", label: "GOOGLE MAPS", color: "#c7efff", accent: "#38bdf8" },
  { id: 5, src: imagePath("5.png"), theme: "space", label: "VERTEX AI", color: "#66dcff", accent: "#2563eb" },
  { id: 4, src: imagePath("4.png"), theme: "air", label: "GEMINI AI", color: "#c7e8ff", accent: "#60a5fa" },
  { id: 3, src: imagePath("3.png"), theme: "fire", label: "TPU", color: "#ff875c", accent: "#ef4444" },
  { id: 2, src: imagePath("2.png"), theme: "water", label: "GOOGLE CLOUD", color: "#83dcff", accent: "#0ea5e9" },
  { id: 1, src: imagePath("1.png"), theme: "earth", label: "GOOGLE EARTH", color: "#8cffaa", accent: "#22c55e" },
];

const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#A142F4"];
const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function FeatureTerminal({ label, color }) {
  const [display, setDisplay] = useState(label);

  useEffect(() => {
    const startedAt = Date.now();
    const revealDuration = SLIDE_DURATION - 1800; // hold final word for ~1.8 sec

    const interval = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const progress = Math.min(elapsed / revealDuration, 1);
      const revealCount = Math.floor(label.length * progress);

      const next = label
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return char;
          return randomChars[Math.floor(Math.random() * randomChars.length)];
        })
        .join("");

      setDisplay(progress >= 1 ? label : next);

      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [label]);

  return (
    <div className="featureTerminal">
      {/* <div className="terminalLabel">ACTIVE STACK</div> */}
      <div className="terminalBoxes">
        {display.split("").map((char, i) =>
          char === " " ? (
            <span key={i} className="terminalGap" />
          ) : (
            <span
              key={i}
              className="terminalBox"
              style={{
                color: googleColors[i % googleColors.length],
                borderColor: `${color}55`,
                boxShadow: `0 0 12px ${color}33`,
              }}
            >
              {char}
            </span>
          )
        )}
      </div>
    </div>
  );
}

function StageMotion({ theme, color, accent }) {
  return (
    <div className={`stageMotion ${theme}`}>
      <div className="motionLayer layerA" style={{ "--color": color, "--accent": accent }} />
      <div className="motionLayer layerB" style={{ "--color": color, "--accent": accent }} />
      <div className="motionLayer layerC" style={{ "--color": color, "--accent": accent }} />
    </div>
  );
}

function ParticleNumber({ number, color }) {
  const particles = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: 22 + Math.random() * 56,
      top: 22 + Math.random() * 56,
      delay: Math.random() * 0.9,
      size: 6 + Math.random() * 9,
      color: googleColors[i % googleColors.length],
      glyph: ["✦", "◆", "●", "G", "O", "L", "E", "A", "M","N",,"I",, "◇"][i % 10],
    }));
  }, [number]);

  return (
    <div className="particleLayer" key={number}>
      <div className="particleNumberGhost" style={{ color }}>
        {number}
      </div>

      {particles.map((p) => (
        <span
          key={p.id}
          className="particleGlyph"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            color: p.color,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  const current = stages[index];
  const progress = ((index + 1) / stages.length) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < stages.length - 1) setIndex((prev) => prev + 1);
      else setDone(true);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <main className="appRoot">
      <div
        className="mapBackground"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.66), rgba(0,0,0,0.76)),
            url("${imagePath("mountain-view-map.png")}")
          `,
        }}
      />

      <section className="cinemaFrame" style={{ borderColor: `${current.color}44` }}>
        {stages.map((stage, i) => {
          const active = i === index;

          return (
            <div
              key={stage.id}
              className="slide"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "scale(1.01)" : "scale(1.04)",
                filter: active
                  ? "brightness(0.9) contrast(1.1) saturate(1.14)"
                  : "brightness(0.25) blur(18px)",
              }}
            >
              <img src={stage.src} alt={`Countdown ${stage.id}`} />
              {active && <StageMotion theme={stage.theme} color={stage.color} accent={stage.accent} />}
              <div className="brightnessControl" />
            </div>
          );
        })}

        <ParticleNumber number={current.id} color={current.color} />
        <FeatureTerminal label={current.label} color={current.color} />

        <div className="lightSweep" />
        <div className="particleDust" />
        <div className="topBar" />
        <div className="bottomBar" />
        <div className="vignette" />

        <div className="header">
          <div>Google I/O 2026</div>
          {/* <span>{current.label}</span> */}
        </div>

        <div className="progressTrack">
          <div
            className="progressFill"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${current.accent}, ${current.color})`,
              boxShadow: `0 0 24px ${current.color}`,
            }}
          />
        </div>

        {done && (
          <div className="finalOverlay">
            <h1>Google I/O</h1>
            <p>2026</p>
          </div>
        )}
      </section>

      <style>{`
        html, body, #root {
          margin: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #000;
        }

        * { box-sizing: border-box; }

        .appRoot {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Inter, system-ui, sans-serif;
        }

        .mapBackground {
          position: absolute;
          inset: -6%;
          background-size: cover;
          background-position: center;
          filter: saturate(0.9) contrast(1.12) brightness(0.78);
          animation: mapDrift 18s ease-in-out infinite alternate;
        }

        .cinemaFrame {
          position: relative;
          width: min(94vw, 1500px);
          height: min(94vh, calc(min(94vw, 1500px) * 9 / 16));
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid;
          background: rgba(0,0,0,0.85);
          box-shadow: 0 0 150px rgba(0,0,0,0.95);
        }

        .slide {
          position: absolute;
          inset: 0;
          transition:
            opacity 1200ms ease,
            transform 6000ms cubic-bezier(.19,1,.22,1),
            filter 1200ms ease;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: rgba(0,0,0,0.7);
        }

        .stageMotion {
          position: absolute;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .motionLayer {
          position: absolute;
          inset: -20%;
          opacity: 0.3;
        }

        .quantum .layerA {
          background: repeating-radial-gradient(circle at center, transparent 0 28px, var(--color) 30px 32px);
          animation: quantumPulse 5s ease-in-out infinite;
        }

        .deepmind .layerA {
          background-image:
            radial-gradient(circle, var(--color) 1px, transparent 2px),
            linear-gradient(45deg, transparent 45%, var(--accent) 50%, transparent 55%);
          background-size: 42px 42px, 160px 160px;
          animation: neuralFlow 5s linear infinite;
        }

        .human .layerA {
          background: radial-gradient(circle at center, var(--accent), transparent 28%);
          animation: heartbeat 1.8s ease-in-out infinite;
          opacity: 0.22;
        }

        .sun .layerA {
          position: absolute;
          inset: 32%;
          border-radius: 50%;
          background:
            repeating-conic-gradient(
              from 0deg,
              rgba(255, 220, 120, 0.18) 0deg 2deg,
              transparent 3deg 18deg
            );

          filter: blur(10px);
          transform-origin: center;
          animation: spinSlow 20s linear infinite;
          opacity: 0.12;
    }

        .sun .layerB {
      position: absolute;
      inset: 38%;
      border-radius: 50%;
      background:
        radial-gradient(
          circle at center,
          rgba(255, 220, 120, 0.22),
          rgba(255, 220, 120, 0.06) 45%,
          transparent 70%
        );

      filter: blur(24px);
      animation: sunPulse 4s ease-in-out infinite alternate;
      opacity: 0.22;
    }

        .moon .layerA {
          background-image: radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 2px);
          background-size: 38px 38px;
          animation: starDrift 9s linear infinite;
        }

        .space .layerA {
          background-image:
            radial-gradient(circle, var(--color) 1px, transparent 2px),
            linear-gradient(60deg, transparent 48%, var(--accent) 50%, transparent 52%);
          background-size: 54px 54px, 220px 220px;
          animation: constellationMove 8s linear infinite;
        }

        .air .layerA {
          background: repeating-linear-gradient(115deg, transparent 0 42px, var(--color) 44px 46px, transparent 48px 80px);
          animation: airFlow 5s ease-in-out infinite;
        }

        .fire .layerA {
          background-image: radial-gradient(circle, var(--accent) 1px, transparent 3px);
          background-size: 26px 26px;
          animation: emberRise 3.2s linear infinite;
          opacity: 0.42;
        }

        .water .layerA {
          background: repeating-radial-gradient(ellipse at center, transparent 0 26px, var(--color) 28px 30px);
          animation: waterRipple 4.5s ease-in-out infinite;
        }

        .earth .layerA {
          background:
            radial-gradient(circle at 50% 50%, transparent 25%, var(--accent) 26%, transparent 28%),
            linear-gradient(90deg, transparent, var(--color), transparent);
          animation: earthOrbit 6s linear infinite;
        }

        .brightnessControl {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(0,0,0,0.05), rgba(0,0,0,0.3) 72%),
            linear-gradient(to bottom, rgba(0,0,0,0.16), transparent 32%, rgba(0,0,0,0.24));
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .featureTerminal {
          position: absolute;
          top: 26px;
          right: 28px;
          z-index: 40;
          padding: 10px 12px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 14px;
          background: rgba(0,0,0,0.38);
          backdrop-filter: blur(14px);
          box-shadow: 0 0 35px rgba(255,255,255,0.08);
        }

        .terminalLabel {
          color: rgba(255,255,255,0.42);
          font-size: 8px;
          letter-spacing: 0.28em;
          margin-bottom: 8px;
          text-align: right;
        }

        .terminalBoxes {
          display: flex;
          gap: 4px;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          max-width: 310px;
        }

        .terminalBox {
          width: 22px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          border-radius: 5px;
          background: rgba(255,255,255,0.045);
          font-size: 11px;
          font-weight: 900;
          line-height: 1;
        }

        .terminalGap {
          width: 10px;
        }

        .particleLayer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          mix-blend-mode: screen;
        }

        .particleNumberGhost {
          position: absolute;
          font-size: clamp(160px, 30vw, 520px);
          font-weight: 900;
          line-height: 1;
          opacity: 0.08;
          animation: ghostPulse 1500ms ease-in-out infinite alternate;
        }

        .particleGlyph {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          opacity: 0;
          animation:
            splashToNumber 1400ms cubic-bezier(.19,1,.22,1) forwards,
            shimmer 2200ms ease-in-out infinite alternate;
        }

        .lightSweep {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.18;
          background: linear-gradient(105deg, transparent 0%, transparent 42%, rgba(255,255,255,0.16) 50%, transparent 58%, transparent 100%);
          animation: lightSweep 4.4s linear infinite;
        }

        .particleDust {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.16;
          background-image: radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px);
          background-size: 28px 28px;
          animation: particles 6s linear infinite;
        }

        .topBar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 13%;
          background: linear-gradient(to bottom, black, rgba(0,0,0,0.72), transparent);
        }

        .bottomBar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 17%;
          background: linear-gradient(to top, black, rgba(0,0,0,0.78), transparent);
        }

        .vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          box-shadow: inset 0 0 180px rgba(0,0,0,0.95);
        }

        .header {
          position: absolute;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          pointer-events: none;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.55em;
          font-size: 10px;
          white-space: nowrap;
        }

        .header span {
          display: block;
          margin-top: 8px;
          font-size: 9px;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.34);
        }

        .progressTrack {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.1);
        }

        .progressFill {
          height: 100%;
          transition: width 700ms linear;
        }

        .finalOverlay {
          position: absolute;
          inset: 0;
          z-index: 80;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(14px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeIn 900ms ease-out forwards;
        }

        .finalOverlay h1 {
          margin: 0;

          font-size: clamp(48px, 8vw, 120px);
          font-weight: 900;
          letter-spacing: -0.05em;

          background:
            linear-gradient(
              90deg,
              #4285F4 0%,
              #EA4335 25%,
              #FBBC05 50%,
              #34A853 75%,
              #4285F4 100%
            );

          background-size: 300% 100%;

          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;

          text-shadow:
            0 0 18px rgba(66,133,244,0.25),
            0 0 24px rgba(234,67,53,0.18),
            0 0 30px rgba(251,188,5,0.18),
            0 0 38px rgba(52,168,83,0.18);

          animation: googleGradientFlow 6s linear infinite;
        }

          .finalOverlay p {
            margin-top: 18px;

            color: rgba(255,255,255,0.96);

            font-size: clamp(20px, 2.2vw, 38px);

            font-weight: 800;

            letter-spacing: 0.38em;

            text-transform: uppercase;

            text-shadow:
              0 0 12px rgba(255,255,255,0.22),
              0 0 24px rgba(255,255,255,0.12);

            animation: finalYearPulse 3s ease-in-out infinite alternate;
          }

        @keyframes mapDrift {
          from { transform: scale(1.08) translate3d(-1%, -1%, 0); }
          to { transform: scale(1.13) translate3d(1%, 1%, 0); }
        }

        @keyframes splashToNumber {
          0% { opacity: 0; transform: scale(0.2) rotate(180deg); }
          60% { opacity: 1; }
          100% { opacity: 0.82; transform: scale(1) rotate(0deg); }
        }

        @keyframes quantumPulse {
          0% { transform: scale(0.85) rotate(0deg); opacity: 0.12; }
          50% { transform: scale(1.12) rotate(8deg); opacity: 0.36; }
          100% { transform: scale(0.9) rotate(-6deg); opacity: 0.18; }
        }

        @keyframes neuralFlow {
          from { background-position: 0 0, 0 0; }
          to { background-position: 84px 84px, 220px 220px; }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(0.92); opacity: 0.16; }
          50% { transform: scale(1.12); opacity: 0.34; }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1.1); }
        }

        @keyframes starDrift {
          from { background-position: 0 0; }
          to { background-position: -76px -76px; }
        }

        @keyframes constellationMove {
          from { background-position: 0 0, 0 0; }
          to { background-position: 108px 108px, 220px 220px; }
        }

        @keyframes airFlow {
          from { transform: translateX(-6%) skewX(-8deg); }
          to { transform: translateX(6%) skewX(8deg); }
        }

        @keyframes emberRise {
          from { background-position: 0 160px; }
          to { background-position: 0 -160px; }
        }

        @keyframes waterRipple {
          0% { transform: scale(0.8); opacity: 0.12; }
          50% { transform: scale(1.08); opacity: 0.28; }
          100% { transform: scale(1.22); opacity: 0.08; }
        }

        @keyframes earthOrbit {
          from { transform: rotate(0deg) scale(0.9); opacity: 0.14; }
          to { transform: rotate(360deg) scale(1.08); opacity: 0.28; }
        }

        @keyframes shimmer {
          from { filter: brightness(0.85); }
          to { filter: brightness(1.25); }
        }

        @keyframes ghostPulse {
          from { opacity: 0.06; transform: scale(0.94); }
          to { opacity: 0.12; transform: scale(1.01); }
        }

        @keyframes lightSweep {
          from { transform: translateX(-140%) skewX(-14deg); }
          to { transform: translateX(140%) skewX(-14deg); }
        }

        @keyframes particles {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-28px, -28px, 0); }
        }


        @keyframes sunPulse {
        from {
          transform: scale(0.92);
          opacity: 0.12;
        }

        to {
          transform: scale(1.06);
          opacity: 0.24;
        }
      }

      @keyframes googleGradientFlow {
        0% {
          background-position: 0% 50%;
        }

        100% {
          background-position: 100% 50%;
        }
      }

      @keyframes finalYearPulse {
        from {
          opacity: 0.82;
          transform: scale(0.98);
        }

        to {
          opacity: 1;
          transform: scale(1.03);
        }
      }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.04); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  );
}