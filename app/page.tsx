// app/page.tsx
'use client';

import Token from './components/Token';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#333' }}>
          カード / トークン一覧
        </h1>
        <Token />
      </div>
    </main>
  );
}