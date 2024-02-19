import { useEffect } from "react";
import { Avatar, Button, Flex, Input, Table, Typography } from "antd";
import type { TableProps } from "antd";
import { DotsThree, Eye, Plus } from "phosphor-react";

import { FilterUsers } from "@/components/atoms/FilterUsers/FilterUsers";

import { useProjects } from "@/hooks/useProjects";
import { useAppStore } from "@/lib/store/store";
import { IProject } from "@/types/projects/IProjects";

import "./projectstable.scss";

const { Text } = Typography;
const { Search } = Input;

export const ProjectTable = () => {
  const { loading, data } = useProjects({ page: 1 });
  const projects = useAppStore((state) => state.projects);
  const setProjects = useAppStore((state) => state.getProjects);
  useEffect(() => {
    setProjects(data.data);
  }, [data, setProjects]);

  return (
    <main className="mainProjectsTable">
      <Flex justify="space-between" className="mainProjectsTable_header">
        <Flex gap={"1.75rem"}>
          <Search
            className="inputSearch"
            size="large"
            placeholder="Buscar"
            style={{ width: 300 }}
          />
          <FilterUsers />
          <Button size="large" icon={<DotsThree size={"1.5rem"} />} />
        </Flex>
        <Button
          type="primary"
          className="buttonNewProject"
          size="large"
          href="/proyectos/new"
          icon={<Plus size={13} />}
        >
          Nuevo Proyecto
        </Button>
      </Flex>
      <Table
        loading={loading}
        scroll={{ y: "61dvh", x: undefined }}
        columns={columns as TableProps<any>["columns"]}
        pagination={{ pageSize: 25 }}
        dataSource={projects}
      />
    </main>
  );
};

const columns: TableProps<IProject>["columns"] = [
  {
    title: "Proyecto",
    dataIndex: "name",
    width: "140px",
    key: "name",
    render: () => (
      <Avatar
        shape="square"
        size={70}
        src={<img src={"/images/cruz-verde.png"} style={{ objectFit: "contain" }} alt="avatar" />}
      />
    )
  },
  {
    title: "Name",
    // width: "150px",
    dataIndex: "PROJECT_DESCRIPTION",
    key: "PROJECT_DESCRIPTION",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Pais",
    // width: "150px",
    dataIndex: "COUNTRY_NAME",
    key: "COUNTRY_NAME",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Direccion",
    dataIndex: "ADDRESS",
    // width: "165px",
    key: "ADDRESS"
  },
  {
    title: "Contact",
    key: "CONTACT",
    // width: "155px",
    dataIndex: "CONTACT",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Telefono",
    key: "PHONE",
    // width: "160px",
    dataIndex: "PHONE",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Usuarios",
    key: "NUMBER_USERS",
    width: "120px",
    dataIndex: "NUMBER_USERS",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Divisas",
    key: "CURRENCY",
    width: "140px",
    dataIndex: "CURRENCY",
    render: (_, { CURRENCY }) => {
      return (
        <>
          {CURRENCY.map(({ CURRENCY_NAME, currency_name = "", id }) => {
            const currencyName = CURRENCY_NAME ?? currency_name;
            return <Text key={`${id}-${currencyName}`}>{currencyName.toUpperCase() + " "}</Text>;
          })}
        </>
      );
    }
  },
  {
    title: "Estado",
    key: "status",
    width: "140px",
    dataIndex: "status",
    render: (_, { IS_ACTIVE }) => (
      <Flex
        align="center"
        className={IS_ACTIVE ? "statusContainerActive" : "statusContainerInactive"}
      >
        <div className={IS_ACTIVE ? "statusActive" : "statusInactive"} />
        <Text>{IS_ACTIVE ? "Activo" : "Desactivado"}</Text>
      </Flex>
    )
  },
  {
    title: "",
    key: "buttonSee",
    width: "60px",
    dataIndex: "",
    render: (_, { ID }) => (
      <Button href={`/proyectos/review/${ID}`} icon={<Eye size={"1.3rem"} />} />
    )
  }
];
