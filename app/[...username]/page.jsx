"use server";

import { GetServerSideProps } from "next";

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
}
const Todo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">Todo</div>
  );
};

export default Todo;
