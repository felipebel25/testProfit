import { Avatar, Button, Flex, Input, Table, Typography } from "antd";
import type { TableProps } from "antd";
import { DotsThree, Eye, Plus } from "phosphor-react";

import "./projectstable.scss";
import { FilterUsers } from "@/components/atoms/FilterUsers/FilterUsers";
interface DataType {
  key: string;
  name: string;
  pais: string;
  address: string;
  contacts: string;
  telefono: string;
  usuarios: string;
  divisas: string;
}
const { Text } = Typography;
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Proyecto",
    dataIndex: "name",
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
    dataIndex: "name",
    key: "name",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Pais",
    dataIndex: "pais",
    key: "pais",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Direccion",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Contacts",
    key: "contacts",
    dataIndex: "contacts",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Telefono",
    key: "telefono",
    dataIndex: "telefono",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Usuarios",
    key: "usuarios",
    dataIndex: "usuarios",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Divisas",
    key: "divisas",
    dataIndex: "divisas",
    render: (text) => <Text>{text}</Text>
  },
  // {
  //   title: "",
  //   key: "",
  //   dataIndex: "",
  //   width: "40px",
  //   render: () => <Button href="/proyectos/edit/cruzverde" icon={<Pencil size={"1.3rem"} />} />
  // },
  {
    title: "",
    key: "",
    width: "40px",
    dataIndex: "",
    render: () => <Button href="/proyectos/review/cruzverde" icon={<Eye size={"1.3rem"} />} />
  }
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    pais: "Colombia",
    contacts: "Falcao Garcia",
    address: "New York No. 1 Lake Park",
    telefono: "+57 3227049632",
    usuarios: "69",
    divisas: "USD"
  },
  {
    key: "2",
    name: "Jim Green",
    pais: "Colombia",
    contacts: "Falcao Garcia",
    address: "London No. 1 Lake Park",
    telefono: "+57 3227049632",
    usuarios: "69",
    divisas: "USD"
  },
  {
    key: "3",
    name: "Joe Black",
    pais: "Colombia",
    address: "Sydney No. 1 Lake Park",
    contacts: "Falcao Garcia",
    telefono: "+57 3227049632",
    usuarios: "69",
    divisas: "USD"
  },
  {
    key: "4",
    name: "Joe Black",
    pais: "Colombia",
    address: "Sydney No. 1 Lake Park",
    contacts: "Falcao Garcia",
    telefono: "+57 3227049632",
    usuarios: "69",
    divisas: "USD"
  },
  {
    key: "5",
    name: "Joe Black",
    pais: "Colombia",
    address: "Sydney No. 1 Lake Park",
    contacts: "Falcao Garcia",
    telefono: "+57 3227049632",
    usuarios: "69",
    divisas: "USD"
  },
  {
    key: "6",
    name: "Joe Black",
    pais: "Colombia",
    address: "Sydney No. 1 Lake Park",
    contacts: "Falcao Garcia",
    telefono: "+57 3227049632",
    usuarios: "69",
    divisas: "USD"
  },
  {
    key: "7",
    name: "Joe Black",
    pais: "Colombia",
    address: "Sydney No. 1 Lake Park",
    contacts: "Falcao Garcia",
    telefono: "+57 3227049632",
    usuarios: "69",
    divisas: "USD"
  }
];

const { Search } = Input;

const ProjectTable: React.FC = () => {
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
      <Table columns={columns} dataSource={data} />
    </main>
  );
};

export default ProjectTable;
