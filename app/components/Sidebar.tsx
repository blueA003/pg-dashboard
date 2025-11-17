"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRecoilState } from "recoil";
import { isSidebar } from "@/utils/recoil/atoms";
import { HiMenu, HiX } from "react-icons/hi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Item = {
  label: string;
  href: string;
}

const nav: Item[] = [
  { label: "대시보드", href:"/" },
  { label: "거래 내역", href: "/payments" },
  { label: "가맹점 목록", href: "/merchants" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Sidebar() {
  const [open, setOpen] = useRecoilState(isSidebar);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r border-slate-800 bg-slate-900 text-slate-100 transition-all shrink-0",
        open ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between border-b border-slate-800 px-3 py-5">
        {open && <span className="text-xl font-semibold">PG DASHBOARD</span>}
        <button
          type="button"
          onClick={() => setOpen((perv) => !perv)}
          className="rounded-md border border-slate-600 px-2 py-1 text-xl hover:bg-slate-800"
        >
          {open ? <FiChevronLeft/> : <FiChevronRight/>}
        </button>
      </div>
      <nav className="mt-4 flex-1 space-y-2 px-2">
        {nav.map((item) => {
          const active = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-base hover:bg-slate-800/70",
                active
                  ? "bg-slate-800 text-emerald-300"
                  : "text-slate-300"
              )}
            >
              <span 
                className={cn(
                  "mr-2 h-2 w-2 rounded-full",
                  active ? "bg-emerald-400" : "bg-slate-500"
                )}
              />
              {open && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>
       <div className="border-t border-slate-800 px-3 py-2 text-[11px] text-slate-500">
        {open && <span>v1.0 • Brunch PG</span>}
      </div>
    </aside>
  );
}