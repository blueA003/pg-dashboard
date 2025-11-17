"use client";

import type { Payment } from "@/lib/types/payment";
import { Cards } from "./Cards";
import { CountChart } from "./CountChart";
import { DateChart } from "./DateChart";
import { PChart } from "./PChart";
import { Tables } from "./Tables";


type Props = {
  payments: Payment[];
};

export function Common({ payments }: Props) {
  return (
    <div className="space-y-4">
      <section className="flex gap-4">
        <Cards payments={payments} />
        <CountChart payments={payments} />
      </section>

      <section className="flex gap-4">
        <DateChart payments={payments} />
        <PChart payments={payments} />
      </section>

      <Tables payments={payments}/>

    </div>
  );
}