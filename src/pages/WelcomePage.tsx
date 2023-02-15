import { useNavigate } from "react-router-dom";

const WelcomePage = (): JSX.Element => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/uised");
  };

  return (
    <>
      <div>Welcome Page</div>
      <button onClick={onStart}>getting started</button>
      <button>github</button>
    </>
  );
};

export default WelcomePage;
