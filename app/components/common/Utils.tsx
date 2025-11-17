export function Num(v: number) {
  return new Intl.NumberFormat("ko-KR", {
    maximumFractionDigits: 0,
  }).format(v);
}

export function Date(iso: string) {
  return iso.replace("T", " ").slice(0, 16);
}

export function Badge({ status }: { status: string }) {
  let color = "bg-slate-700 text-slate-100";

  if (status === "SUCCESS") color = "bg-emerald-500/20";
  else if (status === "FAILED") color = "bg-rose-500/20";
  else if (status === "CANCELLED") color = "bg-amber-500/20";

  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] ${color}`}>
      {status}
    </span>
  );
}
