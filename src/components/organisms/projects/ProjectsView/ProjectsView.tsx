"use client";
import { Flex, Typography } from "antd";
import { SideBar } from "@/components/molecules/SideBar/SideBar";
import ProjectTable from "@/components/molecules/tables/ProjectsTable/ProjectsTable";
import "./projects.scss";

const { Title } = Typography;

export const ProjectsView = () => {
  return (
    <main className="mainProject">
      <SideBar />
      <Flex vertical className="contentProject">
        <Title level={1}>Proyectos</Title>
        <ProjectTable />
      </Flex>
    </main>
  );
};
