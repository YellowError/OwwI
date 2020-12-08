import Link from "next/link";

const LinkIndex = ({ children, cheminLink = "#" }) => {
  return (
    <div>
      <Link href={cheminLink}>
        <div className="mx-auto flex flex-col my-20xp max-w-sm ">
          <span className="mx-auto bg-blue-400 hover:bg-blue-300 text-white m-1 px-5 py-3 font-bold rounded ">
            {children}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default LinkIndex;
