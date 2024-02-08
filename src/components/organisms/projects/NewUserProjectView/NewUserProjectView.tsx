import { Button, Flex, Tabs, TabsProps, Typography } from "antd";
import { useRouter } from "next/navigation";

import { NotificationButton } from "@/components/atoms/NotificationButton/NotificationButton";
import { SideBar } from "@/components/molecules/SideBar/SideBar";

import { CaretLeft, CaretRight, ClipboardText } from "phosphor-react";
import "./newuserproject.scss";
import { NewUserProjectForm } from "@/components/molecules/tabs/Projects/NewUserProjectForm/NewUserProjectForm";
import { UploadUsersProject } from "@/components/molecules/tabs/Projects/UploadUsersProject/UploadUsersProject";
const { Title, Text } = Typography;

export const NewUserProjectView = () => {
  const { push } = useRouter();
  return (
    <main className="newUserProject">
      <SideBar />
      <Flex vertical className="containerDetailProject">
        <Flex component={"navbar"} align="center" justify="space-between">
          <Flex align="center">
            <Button
              type="text"
              size="large"
              href="/"
              className="buttonGoBack"
              icon={<CaretLeft size={"1.45rem"} />}
            >
              Volver
            </Button>
            <Text className="divider">|</Text>
            <ClipboardText className="icon" size={"1.55rem"} />
            <CaretRight className="icon" size={"1.75rem"} />
            <Text className="rutesText" onClick={() => push("/")}>
              Cruz Verde
            </Text>
            <CaretRight className="icon" size={"1.75rem"} />
            <Text className="rutesText">Nuevo Usuario </Text>
          </Flex>
          <Flex align="center">
            <NotificationButton />
          </Flex>
        </Flex>
        <Flex className="infoHeaderProject">
          {/* ------------Main Info Project-------------- */}
          <Flex vertical>
            <Title level={1} className="titleName">
              Nuevo Usuario
            </Title>
            <Text className="subtitleNit">Llena los siguientes campos para crear un usuario</Text>
          </Flex>
        </Flex>
        <Flex className="tabsContainer">
          <Tabs defaultActiveKey="1" items={items} size="large" />
        </Flex>
      </Flex>
    </main>
  );
};
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Individual",
    children: <NewUserProjectForm onIsEditProject={() => {}} />
  },
  {
    key: "2",
    label: "Cargar",
    children: <UploadUsersProject />
  }
];
