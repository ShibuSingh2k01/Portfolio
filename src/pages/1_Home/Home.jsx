import Intro from "./Intro";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div>
          <Navbar />
        </div>
        <Intro />
      </div>
    </>
  );
};
export default Home;
