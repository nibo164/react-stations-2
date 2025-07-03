import { Link } from "react-router-dom";

const MakeThreadButton = () => {
  return (
    <>
      <Link to="/threads/new">
        <button class="p-3 text-lg text-white bg-teal-400 hover:bg-teal-500 rounded-full">
          スレッドをたてる
        </button>
      </Link>
    </>
  );
};

export default MakeThreadButton;
