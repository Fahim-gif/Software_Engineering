import React from 'react';
import { Clock3, Package, Sparkles, Truck, Users } from 'lucide-react';

const tasks = [
  { title: 'Custom sofa measurement check', team: 'Design Team', time: '09:30 AM', status: 'In progress' },
  { title: 'Delivery scheduling for 3 orders', team: 'Logistics', time: '11:00 AM', status: 'Pending' },
  { title: 'Final inspection - bedroom suites', team: 'QC Team', time: '02:15 PM', status: 'Ready' },
  { title: 'Customer quote follow-up', team: 'Sales', time: '04:00 PM', status: 'Scheduled' },
];

const operations = [
  { label: 'Open tickets', value: '18', icon: Users },
  { label: 'Pending deliveries', value: '7', icon: Truck },
  { label: 'Production queue', value: '22', icon: Package },
  { label: 'Today tasks', value: '14', icon: Clock3 },
];

export default function StaffPanel() {
  return (
    <main className="pt-32 pb-20 px-6 bg-[#F9F8F6] text-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-brand-green font-semibold">Staff panel</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-brand-dark leading-none">Operations control</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {operations.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">{label}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EDF5F1] text-brand-green">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-5 text-3xl font-bold text-brand-dark">{value}</p>
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-[1.7rem] border border-gray-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(17,17,17,0.35)]">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-brand-dark">Today assignments</h2>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDF5F1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-green">
              <Sparkles className="h-3.5 w-3.5" />
              Live status
            </span>
          </div>

          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.title} className="flex flex-col gap-3 rounded-[1.3rem] bg-[#F9F8F6] p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-base font-semibold text-brand-dark">{task.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{task.team}</p>
                </div>
                <div className="flex items-center gap-3 md:gap-5">
                  <span className="text-sm font-medium text-gray-500">{task.time}</span>
                  <span className="rounded-full bg-[#EAF5EE] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E7A3A]">
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
