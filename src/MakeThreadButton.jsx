import { Link } from "react-router-dom";

const MakeThreadButton = () => {
  return (
    <>
      <Link to="/threads/new">
        <button className="make-thread-button">スレッドをたてる</button>
      </Link>
    </>
  );
};

export default MakeThreadButton;
