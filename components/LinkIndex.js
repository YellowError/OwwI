import Link from "next/link";

const LinkIndex = ({ children, cheminLink = "#", style }) => {
  return (
    <Link href={cheminLink}>
      <div className={style}>
        <span className="">{children}</span>
      </div>
    </Link>
  );
};

export default LinkIndex;
