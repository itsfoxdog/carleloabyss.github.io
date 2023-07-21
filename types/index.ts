import { MouseEventHandler } from "react";
import { Url } from "url";

export interface customButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  URL?: string;
}
