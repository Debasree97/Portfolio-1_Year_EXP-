import { Button } from "antd";

export const CustomButton = ({ img, onClick, isMenuBtn }) => {
  return (
    <Button
      size="medium"
      danger
      shape="circle"
      className={`border-0 cursor-pointer active:scale-95  ${
        isMenuBtn ? "w-[50px] h-[50px] " : "w-[75px] h-[75px]"
      }`}
      onClick={onClick}
    >
      {img}
    </Button>
  );
};
