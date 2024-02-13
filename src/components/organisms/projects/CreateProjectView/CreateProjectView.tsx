import { Flex, Tabs, TabsProps, Typography } from "antd";

import { SideBar } from "@/components/molecules/SideBar/SideBar";
import { NavRightSection } from "@/components/atoms/NavRightSection/NavRightSection";
import { ProjectFormTab } from "@/components/molecules/tabs/Projects/ProjectForm/ProjectFormTab";

import "./createproject.scss";

const { Title } = Typography;

export const CreateProjectView = () => {
  return (
    <main className="mainCreateProject">
      <SideBar />
      <Flex vertical className="containerCreateProject">
        <Flex className="infoHeaderProject">
          <Flex gap={"2rem"}>
            <Title level={1} className="titleName">
              Crear Proyecto
            </Title>
          </Flex>
          <Flex component={"navbar"} align="center" justify="space-between">
            <NavRightSection />
          </Flex>
        </Flex>
        {/* ------------Main Info Project-------------- */}
        <Flex className="tabsContainer">
          <Tabs
            style={{ width: "100%", height: "100%" }}
            defaultActiveKey="1"
            items={items}
            size="large"
          />
        </Flex>
      </Flex>
    </main>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Crear Proyecto",
    children: <ProjectFormTab statusForm="create" onSubmitForm={() => {}} />
  }
  // {
  //   key: "2",
  //   label: "Cuentas",
  //   children: "Content of Tab Pane 2"
  // }
];
