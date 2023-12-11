import { GoHome } from "react-icons/go";
import { useRouter } from "next/navigation";

const HomeIcon = () => {
  const router = useRouter();
  return (
    <GoHome
      onClick={() => {
        router.push("/");
      }}
      className="fixed right-2 top-2 h-10 w-10 fill-black stroke-black dark:fill-white dark:stroke-white"
    />
  );
};

export default HomeIcon;
