import { Flex, Tabs, TabsProps, Typography, message } from "antd";

// components
import { SideBar } from "@/components/molecules/SideBar/SideBar";
import { NavRightSection } from "@/components/atoms/NavRightSection/NavRightSection";
import { ProjectFormTab } from "@/components/molecules/tabs/Projects/ProjectForm/ProjectFormTab";
import { addProject } from "@/services/projects/projects";

//interfaces
import { ICreatePayload } from "@/types/projects/IProjects";

//vars
import { CREATED } from "@/utils/constants/globalConstants";
import { useRouter } from "next/navigation";

import "./createproject.scss";

const { Title } = Typography;

export const CreateProjectView = () => {
  const { push } = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const onCreateProject = async (data: ICreatePayload) => {
    if (!data.logo) return;
    try {
      const response = await addProject(data);
      if (response.status === CREATED) {
        messageApi.open({
          type: "success",
          content: "El proyecto fue creado exitosamente."
        });
        push("/");
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Oops, hubo un error por favor intenta mas tarde."
      });
    }
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Crear Proyecto",
      children: <ProjectFormTab statusForm="create" onSubmitForm={onCreateProject} />
    }
    // {
    //   key: "2",
    //   label: "Cuentas",
    //   children: "Content of Tab Pane 2"
    // }
  ];

  return (
    <>
      {contextHolder}
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
    </>
  );
};
