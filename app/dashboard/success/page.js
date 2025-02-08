import Link from "next/link";

export default async function SuccessPage() {
  return (
    <main className="bg-base-100 min-h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-xl font-bold">Thank you for your purchase ❤️</h1>
      <Link href="/dashboard" className="btn btn-primary">
        Your dashboard here
      </Link>
    </main>
  );
}
