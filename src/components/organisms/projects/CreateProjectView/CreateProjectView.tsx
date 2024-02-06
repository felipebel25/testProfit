import { Button, Flex, Tabs, TabsProps, Typography, Upload } from "antd";
import { useRouter } from "next/navigation";
import { CaretLeft, CaretRight, ClipboardText } from "phosphor-react";

import { SideBar } from "@/components/molecules/SideBar/SideBar";

import { ProjectFormTab } from "@/components/molecules/tabs/Projects/ProjectForm/ProjectFormTab";
import "./createproject.scss";

const { Title, Text } = Typography;

export const CreateProjectView = () => {
  const { push } = useRouter();

  return (
    <main className="mainCreateProject">
      <SideBar />
      <Flex vertical className="containerCreateProject">
        <Flex component={"navbar"} align="center">
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
            Todos los proyectos{" "}
          </Text>
          <CaretRight className="icon" size={"1.75rem"} />
          <Text className="rutesText">Nuevo proyecto </Text>
        </Flex>
        <Flex className="infoHeaderProject">
          <Flex>
            {/* ------------Image Project-------------- */}
            <Upload
              // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
            >
              {"+ Subir"}
            </Upload>
          </Flex>
          {/* ------------Main Info Project-------------- */}
          <Flex vertical>
            <Title level={1} className="titleName">
              Nuevo Proyecto
            </Title>
            {/* <Title level={4} className='subtitleNit'>NIT 10122012334-5</Title> */}
          </Flex>
        </Flex>
        <Flex className="tabsContainer">
          <Tabs style={{ width: "100%" }} defaultActiveKey="1" items={items} size="large" />
        </Flex>
      </Flex>
    </main>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Proyecto",
    children: <ProjectFormTab />
  },
  {
    key: "2",
    label: "Cuentas",
    children: "Content of Tab Pane 2"
  }
];
