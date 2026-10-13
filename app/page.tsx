'use client';

import Token from './components/Token';

export default function HomePage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundImage: `url('/Images/BackToken.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '24px' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#333' }}>
          KCGトークンサイト
        </h1>
        <Token />
      </div>
    </main>
  );
}
