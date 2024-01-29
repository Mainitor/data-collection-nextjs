import React from 'react';
import Link from 'next/link';

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Build this</h1>
        <div className="rounded-xl bg-gray-900 p-4 shadow-sm absolute bottom-4 right-4">
          <Link href="/" className="text-blue-500 hover:underline">Back</Link>
        </div>
    </main>
  );
}