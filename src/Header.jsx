import MakeThreadButton from "./MakeThreadButton.jsx";

const Header = () => {
  return (
    <>
      <header class="w-full flex flex-row p-3 justify-around items-center">
        <h1 class="text-6xl font-semibold">
          <span class="underline decoration-teal-500">Nibo</span>'s BBS
        </h1>
        <MakeThreadButton />
      </header>
    </>
  );
};

export default Header;
