import { Flex, Table, TableProps, Typography } from "antd";

export const UploadUsersProject = () => {
  return (
    <Flex>
      <Table columns={columns} dataSource={data} />
    </Flex>
  );
};
interface DataType {
  key: string;
  name: string;
  correo: string;
  telefono: string;
  rol: string;
  posicion: string;
  zone: string;
  responsable: string;
}
const { Text } = Typography;
const columns: TableProps<DataType>["columns"] = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Correo",
    dataIndex: "correo",
    key: "correo",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Telefono",
    dataIndex: "telefono",
    key: "telefono",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Rol",
    dataIndex: "rol",
    key: "rol",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Posicion",
    dataIndex: "posicion",
    key: "posicion",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Zona",
    dataIndex: "zona",
    key: "zona",
    render: (text) => <Text>{text}</Text>
  },
  {
    title: "Responsabilidad",
    dataIndex: "responsabilidad",
    key: "responsabilidad",
    render: (text) => <Text>{text}</Text>
  }
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    correo: "asdasd@asdas.com",
    telefono: "23123123",
    zone: "casdasd",
    responsable: "asdasd",
    rol: "gerente",
    posicion: "CEO"
  },
  {
    key: "2",
    name: "John Brown",
    correo: "asdasd@asdas.com",
    telefono: "23123123",
    zone: "casdasd",
    responsable: "asdasd",
    rol: "gerente",
    posicion: "CEO"
  },
  {
    key: "3",
    name: "John Brown",
    correo: "asdasd@asdas.com",
    telefono: "23123123",
    zone: "casdasd",
    responsable: "asdasd",
    rol: "gerente",
    posicion: "CEO"
  }
];
