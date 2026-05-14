export default function SuccessState() {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <svg
          className="w-16 h-16 text-gold animate-pop"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-serif text-cream">
        You&apos;re on the list.
      </h2>

      <p className="text-cream/70">
        We&apos;ll be in touch soon. The first calls go out shortly after ICSC.
      </p>
    </div>
  );
}
