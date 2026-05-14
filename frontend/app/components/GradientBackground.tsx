export default function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gold orb - top right */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-drift"
        aria-hidden="true"
      />

      {/* Blue orb - bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl animate-drift-reverse"
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
