"use client";
import { Flex, Typography } from "antd";
import { SideBar } from "@/components/molecules/SideBar/SideBar";
import ProjectTable from "@/components/molecules/tables/ProjectsTable/ProjectsTable";
import { NavRightSection } from "@/components/atoms/NavRightSection/NavRightSection";

import "./projects.scss";

const { Title, Text } = Typography;

export const ProjectsView = () => {
  return (
    <main className="mainProject">
      <SideBar />
      <Flex vertical className="contentProject">
        <Flex justify="space-between" align="center">
          <Flex gap={"1rem"} align="center">
            <Title level={1} className="titleName">
              Cruz Verde
            </Title>
            <Text className="subtitleNit">NIT 10122012334-5</Text>
          </Flex>
          <NavRightSection />
        </Flex>
        <ProjectTable />
      </Flex>
    </main>
  );
};
