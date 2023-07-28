import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const user = useSelector(state=>state.user.username)
  return (
    <div className="my-10 sm:my-16 text-center px-4">
      <h1 className="text-xl  font-semibold  mb-4 md:text-3xl">
        The Best Pizza.
        <br />
        <span className="text-yellow-500"> Straight out of the oven, straight to you.</span>
       
      </h1>

      {user === '' ? <CreateUser /> : <Button to='/menu' type='primary'>Continue Order {user}</Button>}
    </div>
  );
}

export default Home;
