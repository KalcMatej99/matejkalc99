// src/pages/offline.tsx
import React from 'react';
import Head from 'next/head';

const OfflinePage = () => {
  return (
    <div>
      <Head>
        <title>Offline</title>
      </Head>
      <main style={{ textAlign: 'center', padding: '50px' }}>
        <h1>You are offline</h1>
        <p>Please check your internet connection and try again.</p>
      </main>
    </div>
  );
};

export default OfflinePage;
