import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Users, UserRound } from 'lucide-react';

const roleRouteMap = {
  owner: '#/owner',
  staff: '#/staff',
  customer: '#/customer',
};

const roles = [
  {
    key: 'owner',
    title: 'Owner',
    description: 'Manage inventory, pricing, and approvals.',
    accent: 'bg-[#0B4E38]',
    Icon: ShieldCheck,
  },
  {
    key: 'staff',
    title: 'Stuff',
    description: 'Track customer requests and daily operations.',
    accent: 'bg-[#1B3A34]',
    Icon: Users,
  },
  {
    key: 'customer',
    title: 'Customer',
    description: 'Browse sofas, request quotes, and place orders.',
    accent: 'bg-[#3D4F4A]',
    Icon: UserRound,
  },
];

export default function LoginPanel({ open, onClose }) {
  const [selectedRole, setSelectedRole] = useState(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-[2rem] bg-[#F9F8F6] p-6 md:p-8 shadow-[0_25px_80px_rgba(17,17,17,0.25)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-green font-semibold">
              Access portal
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-brand-dark">
              Welcome back
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:border-brand-green hover:text-brand-green"
          >
            Close
          </button>
        </div>

        {!selectedRole ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {roles.map(({ key, title, description, accent, Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedRole(key)}
                className="group rounded-[1.5rem] border border-gray-200 bg-white p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg"
              >
                <div className={`${accent} flex h-12 w-12 items-center justify-center rounded-2xl text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
                  Select role <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[1.5rem] border border-gray-200 bg-white p-5 md:p-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-brand-green font-semibold">
              {selectedRole}
            </p>
            <h3 className="mt-3 text-2xl font-serif text-brand-dark">
              {roles.find((role) => role.key === selectedRole)?.title} dashboard
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block font-medium">Email</span>
                <input
                  type="email"
                  defaultValue={`${selectedRole}@heavenfurniture.com`}
                  className="w-full rounded-2xl border border-gray-200 bg-[#F9F8F6] px-4 py-3 outline-none focus:border-brand-green"
                />
              </label>
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block font-medium">Password</span>
                <input
                  type="password"
                  defaultValue="••••••••"
                  className="w-full rounded-2xl border border-gray-200 bg-[#F9F8F6] px-4 py-3 outline-none focus:border-brand-green"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  window.location.hash = roleRouteMap[selectedRole];
                  onClose();
                }}
                className="rounded-full bg-[#0B4E38] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#0d5a3d]"
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-700 transition hover:border-brand-green hover:text-brand-green"
              >
                Change role
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
