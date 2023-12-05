import { FaArrowRightLong } from "react-icons/fa6";

const Login = ({ setUsername, handleSubmit, username }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          console.log("submitted");
          handleSubmit(e);
        }}
        className="h-[300px] w-[300px] flex flex-col justify-center items-center"
      >
        <input
          className="self-stretch placeholder-black dark:placeholder-white bg-transparent border border-black dark:border-white rounded-full px-4 h-10 mb-4"
          type="text"
          autoComplete="off"
          value={username}
          placeholder="enter your username"
          onChange={(e) =>
            setUsername({ username: e.target.value, searchVisible: true })
          }
        />
        <button className="btn">submit</button>
      </form>
    </div>
  );
};

export default Login;
