import App from "@/components/App";
import dbConnect from "@/utils/mongoConnect";

export default async function Home() {
  await dbConnect();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-teal-200 to-lime-200  dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <App />
    </main>
  );
}
