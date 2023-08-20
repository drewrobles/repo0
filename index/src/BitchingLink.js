import { useEffect } from 'react'

function RedirectExample() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        // 👇️ redirects to an external URL
        window.location.replace('https://open.spotify.com/user/21xh2ksi4wu4wl2z6mjsxia7a?si=7OdZA5swTXO-q0b8yP_P1A');
      }, 0);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return <></>;
  }

export default RedirectExample