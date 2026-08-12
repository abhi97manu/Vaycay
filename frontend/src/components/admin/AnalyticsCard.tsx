type AnalyticsCardProps = {
  label: string;
  value: string | number;
};

export function AnalyticsCard({ label, value }: AnalyticsCardProps) {
  return (
    <div className="panel p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-slate/45">{label}</p>
      <p className="mt-3 font-display text-5xl text-coral">{value}</p>
    </div>
  );
}
