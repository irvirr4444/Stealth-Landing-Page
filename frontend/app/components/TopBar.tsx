import PulsingDot from "./PulsingDot";
import LiveCounter from "./LiveCounter";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-6 relative z-10">
      <div className="flex items-center gap-2">
        <PulsingDot />
        <span className="text-sm text-cream/80 font-medium">In Stealth</span>
      </div>
      <LiveCounter />
    </div>
  );
}
