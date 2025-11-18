export function Num(v: number | string) {
  const n = typeof v === "string" ? Number(v) : v
  if (Number.isNaN(n)) return "-";

  return new Intl.NumberFormat("ko-KR", {
    maximumFractionDigits: 0,
  }).format(n);
}

export function ReDate(iso: string) {
  return iso.replace("T", " ").slice(0, 16);
}

export function Badge({ status }: { status: string }) {
  let color = "";

  if (status === "SUCCESS") color = "bg-emerald-500/20";
  else if (status === "FAILED") color = "bg-rose-500/20";
  else if (status === "CANCELLED") color = "bg-amber-500/20";

  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] ${color}`}>
      {status}
    </span>
  );
}
