import App from "@/components/App";
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URI;

mongoose.connect(mongoUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <App />
    </main>
  );
}
