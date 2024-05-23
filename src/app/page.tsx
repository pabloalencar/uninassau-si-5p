import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Sucesso aqui na Uninassau!! Chama!</h1>
      <Image
        src="/images/nextjs.svg"
        alt="Next.js Logo"
        width={200}
        height={200}
      />
    </main>
  );
}
