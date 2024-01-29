import React from 'react';
import Link from 'next/link';

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex relative">
        <div className="rounded-xl bg-gray-500 p-4 shadow-sm">
          {/* Machine Name */}
          <div className="mb-4">
            <label htmlFor="machineName" className="block text-white">Machine Name:</label>
            <input type="text" id="machineName" className="p-2 border rounded" />
          </div>

          {/* Machine Status */}
          <div className="mb-4">
            <label htmlFor="machineStatus" className="block text-white">Machine Status:</label>
            <input type="text" id="machineStatus" className="p-2 border rounded" />
          </div>

          {/* Recording Duration */}
          <div>
            <label htmlFor="duration" className="block text-white mb-2">Recording Duration:</label>
            <div className="flex items-center">
              <input type="number" id="hours" placeholder="Hours" className="p-2 border rounded mr-2" />
              <input type="number" id="minutes" placeholder="Minutes" className="p-2 border rounded mr-2" />
              <input type="number" id="seconds" placeholder="Seconds" className="p-2 border rounded" />
            </div>
          </div>
        </div>

        {/* Back Button */}
      </div>
      <div className="rounded-xl bg-gray-900 p-4 shadow-sm absolute bottom-4 right-4">
          <Link href="/recording/in-progress" className="text-blue-500 hover:underline">Begin</Link>
        </div>
        <div className="rounded-xl bg-gray-900 p-4 shadow-sm absolute bottom-4 right-24">
          <Link href="/" className="text-blue-500 hover:underline">Back</Link>
        </div>
    </main>
  );
}
