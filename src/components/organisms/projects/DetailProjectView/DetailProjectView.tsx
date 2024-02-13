import { useState } from "react";
import { Flex, Tabs, TabsProps, Typography } from "antd";

import { SideBar } from "@/components/molecules/SideBar/SideBar";
import { ProjectFormTab } from "@/components/molecules/tabs/Projects/ProjectForm/ProjectFormTab";
import { NavRightSection } from "@/components/atoms/NavRightSection/NavRightSection";

import { UsersProjectTable } from "@/components/molecules/tables/UsersProjectTable/UsersProjectTable";
import { UserProjectForm } from "@/components/molecules/tabs/Projects/UserProjectForm/UserProjectForm";

import "./detailproject.scss";

const { Title, Text } = Typography;
interface Props {
  isEdit?: boolean;
}

export const DetailsProjectView = ({ isEdit = false }: Props) => {
  const [isEditProject, setIsEditProject] = useState(isEdit);
  const [isCreateUser, setIsCreateUser] = useState(false);
  const [isViewDetailsUser, setIsViewDetailsUser] = useState(false);

  const onGoBackTableUsers = () => {
    setIsCreateUser(false);
    setIsViewDetailsUser(false);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Proyecto",
      children: (
        <ProjectFormTab
          onSubmitForm={() => {}}
          statusForm={isEditProject ? "edit" : "review"}
          onEditProject={() => setIsEditProject(true)}
        />
      )
    },
    {
      key: "2",
      label: "Reglas de Negocio",
      children: "Content of Tab Pane 2"
    },
    {
      key: "3",
      label: "Clientes",
      children: "Content of Tab Pane 3"
    },
    {
      key: "4",
      label: "Usuarios",
      children:
        isCreateUser || isViewDetailsUser ? (
          <UserProjectForm
            onGoBackTable={onGoBackTableUsers}
            isViewDetailsUser={isViewDetailsUser}
          />
        ) : (
          <UsersProjectTable
            setIsViewDetails={setIsViewDetailsUser}
            setIsCreateUser={setIsCreateUser}
          />
        )
    },
    {
      key: "5",
      label: "Cuentas",
      children: "Content of Tab Pane 3"
    }
  ];

  return (
    <main className="mainDetailProject">
      <SideBar />
      <Flex vertical className="containerDetailProject">
        <Flex component={"navbar"} align="center" justify="space-between">
          <Flex className="infoHeaderProject">
            <Flex gap={"2rem"} align="center">
              <Title level={1} className="titleName">
                Cruz Verde
              </Title>
              <Text className="subtitleNit">NIT 10122012334-5</Text>
            </Flex>
          </Flex>
          <Flex align="center">
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
