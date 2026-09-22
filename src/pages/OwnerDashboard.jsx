import React from 'react';
import { ArrowUpRight, Box, DollarSign, LayoutGrid, PackageCheck, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Monthly Sales', value: '৳ 3.42L', delta: '+12.4%', icon: DollarSign },
  { label: 'Active Orders', value: '86', delta: '+8.1%', icon: PackageCheck },
  { label: 'Inventory Items', value: '1,420', delta: '+64', icon: Box },
  { label: 'Conversion Rate', value: '32.8%', delta: '+4.6%', icon: TrendingUp },
];

const orders = [
  { id: '#HFM-2048', customer: 'Ayesha Rahman', item: 'Aster Teak Dining Set', total: '৳ 38,900', status: 'Ready for dispatch' },
  { id: '#HFM-2091', customer: 'Jamil Hossain', item: 'Noura Mahogany Bed', total: '৳ 41,200', status: 'In production' },
  { id: '#HFM-2140', customer: 'Sabina Ahmed', item: 'Marin Velvet Lounge', total: '৳ 24,500', status: 'Awaiting payment' },
  { id: '#HFM-2199', customer: 'Farhan Karim', item: 'Sera Executive Desk', total: '৳ 21,900', status: 'Completed' },
];

const lowStock = [
  { item: 'Luna Accent Chairs', qty: '9 left', status: 'Restock soon' },
  { item: 'Mila Storage Console', qty: '14 left', status: 'Low supply' },
  { item: 'Aster Dining Chairs', qty: '11 left', status: 'Reorder' },
];

export default function OwnerDashboard() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#F9F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-green font-semibold">Owner dashboard</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl text-brand-dark leading-none">Operations overview</h1>
          </div>

          <button className="inline-flex items-center gap-2 rounded-full bg-[#0B4E38] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0d5a3d]">
            <LayoutGrid className="h-4 w-4" />
            New report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map(({ label, value, delta, icon: Icon }) => (
            <div key={label} className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">{label}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EDF5F1] text-brand-green">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-5 flex items-end justify-between gap-3">
                <p className="text-3xl font-bold text-brand-dark">{value}</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F8ED] px-2 py-1 text-[10px] font-semibold text-[#1E7A3A]">
                  <ArrowUpRight className="h-3 w-3" />
                  {delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 xl:grid-cols-[1.5fr_0.9fr] gap-6">
          <section className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-brand-dark">Recent orders</h2>
              <button className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">View all</button>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex flex-col gap-3 rounded-[1.3rem] bg-[#F9F8F6] p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{order.id}</p>
                    <h3 className="mt-2 text-base font-semibold text-brand-dark">{order.customer}</h3>
                    <p className="text-sm text-gray-600">{order.item}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm font-semibold text-brand-dark">{order.total}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-green">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]">
            <h2 className="text-xl font-semibold text-brand-dark">Low stock</h2>
            <div className="mt-5 space-y-4">
              {lowStock.map((item) => (
                <div key={item.item} className="flex items-center justify-between gap-3 rounded-[1.2rem] bg-[#F9F8F6] p-3">
                  <div>
                    <p className="text-sm font-medium text-brand-dark">{item.item}</p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">{item.status}</p>
                  </div>
                  <span className="rounded-full bg-[#FEEFEA] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B45731]">
                    {item.qty}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
