import { useCallback, useEffect, useState } from 'react';

/**
 * Minimal, dependency-free hash router.
 *
 * The project had no routing library installed, so rather than adding a new
 * dependency we read the URL hash (`#/about`). Hash routing works identically
 * in `vite dev` and in a static `vite build` output — no server rewrite rules
 * required. Swapping to react-router later only means replacing this hook and
 * the <a href="#/..."> links in Navbar/Footer.
 */

const normalize = (raw) => {
  const path = (raw || '').replace(/^#/, '').split('?')[0];
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
};

export function useHashRoute() {
  const [path, setPath] = useState(() => normalize(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setPath(normalize(window.location.hash));
      // Jump (not smooth-scroll) to the top on navigation.
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((to) => {
    window.location.hash = to.startsWith('#') ? to : `#${to}`;
  }, []);

  return { path, navigate };
}

export default useHashRoute;
