import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/recording">Record New Sample Set</Link>
      <Link href="/recordings">View Local Samples</Link>
    </main>
  );
}
