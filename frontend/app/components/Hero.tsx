import CyclingHeadline from "./CyclingHeadline";

export default function Hero() {
  return (
    <div className="space-y-6 mb-10">
      <p className="text-xs uppercase tracking-widest text-cream/50">
        Something is coming
      </p>

      <CyclingHeadline />

      <p className="text-lg text-cream/80">
        It&apos;s time we gave you the lift you deserved.
      </p>

      <p className="text-sm text-cream/50">
        Built for anyone who runs deal flow for a living.
      </p>
    </div>
  );
}
