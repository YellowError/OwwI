import Link from "next/link";

const Button = ({ href, src, nameBtn }) => {
  return (
    <Link href={href}>
      <button>
        <img src={src} alt={nameBtn} />
        <span>{nameBtn}</span>
      </button>
    </Link>
  );
};
export default Button;
