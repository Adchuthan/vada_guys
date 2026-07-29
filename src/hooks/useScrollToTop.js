import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router keeps scroll position between route changes by default.
// This hook resets it to the top every time the path changes, which is
// what users expect when navigating to a new page.
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
}

export default useScrollToTop;
