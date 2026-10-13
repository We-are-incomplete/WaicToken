'use client';

import Token from './components/Token';

export default function HomePage() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundImage: `url('/Images/Back.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '24px' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Token />
      </div>
    </main>
  );
}
