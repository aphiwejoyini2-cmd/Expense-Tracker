"use client";
import {useState} from "react";

import ExpenseCard from "@/components/ExpenseCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Expense Tracker
        </h1>

        <p className="mb-8 text-gray-600">
          Keep track of where your money goes.
        </p>

        <section>
          <h2 className="mb-4 text-xl font-semibold">
            Recent Expenses
          </h2>

          <div className="space-y-4">


           <ExpenseCard
              title="Lunch"
              category="Food"
              amount={120}
            />

            <ExpenseCard
              title="Uber"
              category="Transport"
              amount={250}
            />

            <ExpenseCard
              title="Groceries"
              category="Shopping"
              amount={850}
            />

          </div>
        </section>

      </div>
    </main>
  );
}