import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Search, UserRound, X } from 'lucide-react';
import { useHashRoute } from '../hooks/useHashRoute';
import LoginPanel from './LoginPanel';

/** Navigation model — single source of truth for desktop + mobile menus. */
const NAV_LINKS = [
  { label: 'Home', href: '#/' },
  {
    label: 'All Collection',
    href: '#/collections',
    children: [
      { label: 'Living Room', href: '#/collections' },
      { label: 'Dining Room', href: '#/collections' },
      { label: 'Bedroom Suites', href: '#/collections' },
      { label: 'Office & Study', href: '#/collections' },
    ],
  },
  { label: 'Gallery', href: '#/gallery' },
  { label: 'Videos', href: '#/videos' },
  { label: 'Journal', href: '#/journal' },
  { label: 'About', href: '#/about' },
  { label: 'Contact', href: '#/contact' },
];

export default function Navbar() {
  const { path } = useHashRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loginOpen, setLoginOpen] = useState(false);

  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);

  const isActive = (href) => href.replace(/^#/, '') === path;

  // Close every overlay whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
  }, [path]);

  // Focus the search field as it expands.
  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  // Dismiss the dropdown on outside click / Escape.
  useEffect(() => {
    const onPointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    setSearchOpen(false);
  };

  return (
    <header className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">
      <nav
        aria-label="Primary"
        className="bg-white/85 backdrop-blur-md rounded-full px-5 md:px-8 py-3 md:py-3.5 flex items-center justify-between border border-white/60 shadow-sm"
      >
        <a
          href="#/"
          className="text-xl md:text-2xl font-black tracking-wider text-brand-dark cursor-pointer shrink-0"
        >
          HEAVEN
        </a>

        {/* ---------- Desktop navigation ---------- */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-7 text-xs font-medium text-gray-700">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li key={link.label} className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((open) => !open)}
                  className={`flex items-center gap-1 transition hover:text-brand-green ${
                    isActive(link.href) ? 'text-black font-semibold' : ''
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="animate-fade-down absolute left-1/2 -translate-x-1/2 top-9 w-52 bg-white rounded-2xl border border-gray-100 shadow-lg p-2">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 rounded-xl text-xs text-gray-600 hover:bg-about-sage-light hover:text-brand-green transition"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`transition hover:text-brand-green ${
                    isActive(link.href)
                      ? 'text-black font-semibold border-b border-brand-green pb-0.5'
                      : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* ---------- Search + hamburger ---------- */}
        <div className="flex items-center gap-1">
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center"
            role="search"
          >
            <input
              ref={searchInputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search furniture…"
              aria-label="Search"
              className={`bg-gray-50 rounded-full text-xs outline-none transition-all duration-300 ${
                searchOpen
                  ? 'w-40 lg:w-48 px-4 py-2 mr-1 border border-gray-200'
                  : 'w-0 px-0 py-2 border-0 pointer-events-none'
              }`}
            />
            <button
              type={searchOpen ? 'submit' : 'button'}
              onClick={() => !searchOpen && setSearchOpen(true)}
              aria-label={searchOpen ? 'Submit search' : 'Open search'}
              className="p-2 hover:bg-gray-100 rounded-full transition text-gray-800"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            aria-label="Open login panel"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0B4E38] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#0d5a3d]"
          >
            <UserRound className="h-3.5 w-3.5" />
            Login
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition text-gray-800"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ---------- Mobile panel ---------- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-[32rem] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/60 shadow-lg p-5">
          <form onSubmit={handleSearchSubmit} role="search" className="mb-4">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5">
              <Search className="w-4 h-4 text-gray-500 shrink-0" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search furniture…"
                aria-label="Search"
                className="bg-transparent text-xs outline-none w-full"
              />
            </div>
          </form>

          <ul className="flex flex-col text-sm text-gray-700">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-gray-100 last:border-0">
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`flex items-center justify-between py-3 transition ${
                    isActive(link.href)
                      ? 'text-brand-green font-semibold'
                      : 'hover:text-brand-green'
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </a>

                {link.children && (
                  <div className="pb-3 pl-4 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="text-xs text-gray-500 hover:text-brand-green transition"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B4E38] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
          >
            <UserRound className="h-3.5 w-3.5" />
            Login Panel
          </button>
        </div>
      </div>

      <LoginPanel open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}
