import Image from "next/image";
import { testDatabaseConnection } from "./actions";
import Link from "next/link";

export default async function Home() {
  // const isConnected = await testDatabaseConnection();
  const isConnected = false;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col place-items-center gap-12">
        {isConnected ? (
          <h2 className="text-lg text-green-500">
            You are connected to MongoDB!
          </h2>
        ) : (
          <h2 className="text-lg text-red-500">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}
      </div>
    </main>
  );
}
