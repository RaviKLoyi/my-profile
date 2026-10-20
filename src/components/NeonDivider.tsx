export function NeonDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6" aria-hidden="true">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
        }}
      />
    </div>
  );
}
