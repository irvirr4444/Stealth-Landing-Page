export default function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gold orb - top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full animate-drift"
        style={{
          background: "radial-gradient(circle, rgba(184, 138, 74, 0.4) 0%, rgba(184, 138, 74, 0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Blue orb - left side */}
      <div
        className="absolute top-1/3 -left-10 w-[450px] h-[450px] rounded-full animate-drift-reverse"
        style={{
          background: "radial-gradient(circle, rgba(30, 58, 138, 0.4) 0%, rgba(30, 58, 138, 0.15) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid overlay with radial fade */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245, 243, 237, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 243, 237, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
