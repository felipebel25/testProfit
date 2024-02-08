import { Button } from "antd";
import { Bell } from "phosphor-react";

export const NotificationButton = () => {
  return <Button type="text" size="large" icon={<Bell size={"1.5rem"} weight="fill" />} />;
};
