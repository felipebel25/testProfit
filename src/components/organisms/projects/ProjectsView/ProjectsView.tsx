"use client";
import { Flex, Typography } from "antd";
import { SideBar } from "@/components/molecules/SideBar/SideBar";
import ProjectTable from "@/components/molecules/tables/ProjectsTable/ProjectsTable";
import "./projects.scss";
import { NotificationButton } from "@/components/atoms/NotificationButton/NotificationButton";

const { Title } = Typography;

export const ProjectsView = () => {
  return (
    <main className="mainProject">
      <SideBar />
      <Flex vertical className="contentProject">
        <Flex justify="space-between" align="center">
          <Title className="titleProjects" level={1}>
            Proyectos
          </Title>
          <NotificationButton />
        </Flex>
        <ProjectTable />
      </Flex>
    </main>
  );
};
