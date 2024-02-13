"use client";
import { Button, Flex } from "antd";

import { Gear, SquaresFour, User } from "phosphor-react";

import "./sidebar.scss";
export const SideBar = () => {
  return (
    <div className="main">
      <Flex vertical justify="center" align="center" className="containerButtons">
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
    </div>
  );
};
