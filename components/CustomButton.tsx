import { customButtonProps } from "@/types";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  URL,
}: customButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        {<Link href={`${URL}`}>{title}</Link>}
      </button>
    </div>
  );
};

export default CustomButton;
