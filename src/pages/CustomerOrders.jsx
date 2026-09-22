import React from 'react';
import { ArrowRight, Check, ShoppingBag, Truck } from 'lucide-react';

const orders = [
  {
    id: 'ORD-1042',
    item: 'Aster Teak Dining Set',
    total: '৳ 38,900',
    status: 'Shipped',
    eta: 'Arrives in 4 days',
  },
  {
    id: 'ORD-1189',
    item: 'Marin Velvet Lounge',
    total: '৳ 24,500',
    status: 'Processing',
    eta: 'Confirming production',
  },
  {
    id: 'ORD-1228',
    item: 'Noura Mahogany Bed',
    total: '৳ 41,200',
    status: 'Delivered',
    eta: 'Completed on 18 Sep',
  },
];

const cart = [
  { name: 'Horizon Accent Console', qty: 1, price: '৳ 17,200' },
  { name: 'Sera Executive Desk', qty: 1, price: '৳ 21,900' },
];

export default function CustomerOrders() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#F9F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-green font-semibold">Customer portal</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl text-brand-dark leading-none">My orders & cart</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#0B4E38] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0d5a3d]">
            <ShoppingBag className="h-4 w-4" />
            Continue shopping
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.8fr] gap-6">
          <section className="rounded-[1.7rem] border border-gray-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-brand-dark">Order history</h2>
              <button className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Track all</button>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex flex-col gap-3 rounded-[1.3rem] bg-[#F9F8F6] p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{order.id}</p>
                    <h3 className="mt-2 text-base font-semibold text-brand-dark">{order.item}</h3>
                    <p className="text-sm text-gray-600">{order.eta}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-lg font-bold text-brand-dark">{order.total}</p>
                    <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#EAF5EE] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E7A3A]">
                      <Check className="h-3 w-3" />
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-[1.7rem] border border-gray-200 bg-[#111111] p-5 text-white shadow-[0_18px_40px_-30px_rgba(17,17,17,0.5)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Cart summary</h2>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#A9FFCF]">
                2 items
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {cart.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-3 rounded-[1.2rem] bg-white/5 p-3">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-300">Qty: {item.qty}</p>
                  </div>
                  <span className="text-sm font-semibold">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Subtotal</span>
                <span>৳ 39,100</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-300">
                <span>Delivery</span>
                <span>৳ 1,200</span>
              </div>
              <div className="mt-4 flex items-center justify-between text-lg font-bold text-white">
                <span>Total</span>
                <span>৳ 40,300</span>
              </div>
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B4E38] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0d5a3d]">
              <Truck className="h-4 w-4" />
              Checkout
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}
