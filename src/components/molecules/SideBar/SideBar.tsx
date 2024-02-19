"use client";
import { Button, Flex } from "antd";

import { ArrowLineRight, Gear, SquaresFour, User } from "phosphor-react";

import "./sidebar.scss";
import Image from "next/image";
export const SideBar = () => {
  return (
    <div className="main">
      <Flex vertical justify="center" align="center" className="containerButtons">
        <Flex className="logoContainer">
          <Image width={50} height={50} alt="logo company" src="/images/cruz-verde.png" />
        </Flex>
        <Button
          type="primary"
          size="large"
          icon={<SquaresFour size="26" />}
          className="buttonIconActive"
        />
        <Button type="primary" size="large" icon={<User size="26" />} className="buttonIcon" />
        <Button
          type="primary"
          size="large"
          icon={<Gear size="26" />}
          className="buttonIconActive"
        />
      </Flex>
      <Flex>
        <Button
          type="text"
          size="large"
          icon={<ArrowLineRight size="26" />}
          // className="buttonIconActive"
        />
      </Flex>
    </div>
  );
};
