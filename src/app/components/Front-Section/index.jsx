"use client";
import { CustomButton } from "../Common/CustomButton";
import Image from "next/image";
import plusImg from "../../../../public/images/plus.png";
import closeImg from "../../../../public/images/close.png";
import profileImg from "../../../../public/images/profile.png";
import projectsImg from "../../../../public/images/projects.png";
import emailImg from "../../../../public/images/email.png";
import { useState } from "react";
import { Space } from "antd";

const FrontPage = () => {
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  const handleChange = () => {
    setIsButtonOpen(!isButtonOpen);
    console.log(isButtonOpen);
  };
  return (
    <Space
      direction="vertical"
      size="large"
      align="center"
      className="fixed left-24 bottom-20"
    >
      <Space
        className={` ${isButtonOpen ? "block" : "hidden"}`}
        direction="vertical"
        size="large"
      >
        <CustomButton
          className="animation ease-in-out delay-700"
          // onClick={handleChange}
          isMenuBtn={true}
          img={<Image src={profileImg} />}
        />
        <CustomButton
          // onClick={handleChange}
          isMenuBtn={true}
          img={<Image src={projectsImg} />}
        />
        <CustomButton
          // onClick={handleChange}
          isMenuBtn={true}
          img={<Image src={emailImg} />}
        />
      </Space>

      <CustomButton
        onClick={handleChange}
        isMenuBtn={false}
        img={isButtonOpen ? <Image src={closeImg} /> : <Image src={plusImg} />}
      />
    </Space>
  );
};

export default FrontPage;
