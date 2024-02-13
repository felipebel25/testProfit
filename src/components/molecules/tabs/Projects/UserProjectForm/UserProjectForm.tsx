import { useState } from "react";
import { Button, Flex, Input, Select, SelectProps, Space, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ArrowLineDown, ArrowLineUp, CaretLeft, Pencil, Trash } from "phosphor-react";

import "./userprojectform.scss";

const { Title, Text } = Typography;

type UserType = {
  info: {
    name: string;
    cargo: string;
    email: string;
    phone: string;
    rol: string[];
  };
  contact: {
    responsibility: string[];
    zone: string[];
    channel: string[];
    line: string[];
  };
};

interface Props {
  isViewDetailsUser?: boolean;
  onGoBackTable: () => void;
}
export const UserProjectForm = ({ isViewDetailsUser = false, onGoBackTable }: Props) => {
  const [isEditAvailable, setIsEditAvailable] = useState(isViewDetailsUser);
  const { control } = useForm<UserType>({
    defaultValues: isViewDetailsUser ? initialDataDummy : initialData,
    disabled: isEditAvailable
  });
  return (
    <main className="newUserProjectForm">
      <Flex vertical>
        <Flex component={"header"} className="headerNewUserProyectsForm">
          {/* -------------------left buttons------------------------ */}
          <Button
            type="text"
            size="large"
            onClick={onGoBackTable}
            className="buttonGoBack"
            icon={<CaretLeft size={"1.45rem"} />}
          >
            Ver Usuarios
          </Button>
          {/* -----------right buttons--------------- */}
          {isViewDetailsUser && (
            <Flex gap={"1rem"}>
              <Button size="large" className="buttonOutlined" icon={<Trash size={"1.45rem"} />}>
                Eliminar Usuario
              </Button>

              <Button
                size="large"
                onClick={() => setIsEditAvailable(false)}
                className="buttonOutlined"
                icon={<Pencil size={"1.45rem"} />}
              >
                Editar Usuario
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex vertical component={"main"}>
          <Title level={4}>Información del usuario</Title>
          {/* -----------------------------------Informacion del Usuario--------------------------------------- */}
          <Flex component={"section"} className="generalProject">
            <Flex vertical className="containerInput">
              <Title level={5}>Nombre del contacto</Title>
              <Controller
                name="info.name"
                control={control}
                render={({ field }) => (
                  <Input
                    className="input"
                    variant="borderless"
                    placeholder="Color Indicativo"
                    {...field}
                  />
                )}
              />
            </Flex>
            <Flex vertical className="containerInput">
              <Title level={5}>Cargo</Title>
              <Controller
                name="info.cargo"
                control={control}
                render={({ field }) => (
                  <Input className="input" variant="borderless" placeholder="Cargo" {...field} />
                )}
              />
            </Flex>
            <Flex vertical className="containerInput">
              <Title level={5}>Correo electrónico</Title>
              <Controller
                name="info.email"
                control={control}
                render={({ field }) => (
                  <Input className="input" variant="borderless" placeholder="Email" {...field} />
                )}
              />
            </Flex>
            <Flex vertical className="containerInput">
              <Title level={5}>Telefono</Title>
              <Controller
                name="info.phone"
                control={control}
                render={({ field }) => (
                  <Input className="input" variant="borderless" placeholder="Telefono" {...field} />
                )}
              />
            </Flex>
            <Flex vertical className="containerInput">
              <Title level={5}>Rol</Title>
              <Controller
                name="info.rol"
                control={control}
                render={({ field }) => (
                  <Select
                    mode="multiple"
                    className="selectInput"
                    placeholder="Selecciona un rol"
                    optionLabelProp="label"
                    variant="borderless"
                    options={options}
                    optionRender={(option) => (
                      <Space>
                        <span role="img" aria-label={option.data.label}>
                          {option.data.emoji}
                        </span>
                        <Text style={{ color: "white" }}>{option.data.desc}</Text>
                      </Space>
                    )}
                    {...field}
                  />
                )}
              />
            </Flex>
          </Flex>
          {/* -----------------------------------Experiencia----------------------------------- */}
          <Title level={4}>Reglas de Proyecto</Title>
          <Flex component={"section"} className="generalProject">
            <Flex vertical className="containerInput">
              <Title level={5}>Responsabilidad</Title>
              <Controller
                name="contact.responsibility"
                control={control}
                render={({ field }) => (
                  <Select
                    mode="multiple"
                    className="selectInput"
                    placeholder="Selecciona un responsabilidad"
                    // onChange={handleChange}
                    optionLabelProp="label"
                    variant="borderless"
                    options={options}
                    optionRender={(option) => (
                      <Space>
                        <span role="img" aria-label={option.data.label}>
                          {option.data.emoji}
                        </span>
                        <Text style={{ color: "white" }}>{option.data.desc}</Text>
                      </Space>
                    )}
                    {...field}
                  />
                )}
              />
            </Flex>
            <Flex vertical className="containerInput">
              <Title level={5}>Zona</Title>
              <Controller
                name="contact.zone"
                control={control}
                render={({ field }) => (
                  <Select
                    mode="multiple"
                    className="selectInput"
                    placeholder="Selecciona una zona"
                    // onChange={handleChange}
                    optionLabelProp="label"
                    variant="borderless"
                    options={options}
                    optionRender={(option) => (
                      <Space>
                        <span role="img" aria-label={option.data.label}>
                          {option.data.emoji}
                        </span>
                        <Text style={{ color: "white" }}>{option.data.desc}</Text>
                      </Space>
                    )}
                    {...field}
                  />
                )}
              />
            </Flex>
            <Flex vertical className="containerInput">
              <Title level={5}>Canal</Title>
              <Controller
                name="contact.channel"
                control={control}
                render={({ field }) => (
                  <Select
                    mode="multiple"
                    className="selectInput"
                    placeholder="Selecciona un canal"
                    // onChange={handleChange}
                    optionLabelProp="label"
                    variant="borderless"
                    options={options}
                    optionRender={(option) => (
                      <Space>
                        <span role="img" aria-label={option.data.label}>
                          {option.data.emoji}
                        </span>
                        <Text style={{ color: "white" }}>{option.data.desc}</Text>
                      </Space>
                    )}
                    {...field}
                  />
                )}
              />
            </Flex>
            <Flex vertical className="containerInput">
              <Title level={5}>Linea</Title>
              <Controller
                name="contact.line"
                control={control}
                render={({ field }) => (
                  <Select
                    mode="multiple"
                    className="selectInput"
                    placeholder="Selecciona una Linea"
                    // onChange={handleChange}
                    optionLabelProp="label"
                    variant="borderless"
                    options={options}
                    optionRender={(option) => (
                      <Space>
                        <span role="img" aria-label={option.data.label}>
                          {option.data.emoji}
                        </span>
                        <Text style={{ color: "white" }}>{option.data.desc}</Text>
                      </Space>
                    )}
                    {...field}
                  />
                )}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {!isViewDetailsUser && (
        <Flex component={"footer"} className="footerNewUser" justify="flex-end">
          <Flex gap={"1rem"}>
            <Button className="buttonOutlined" icon={<ArrowLineDown size="1.3rem" />} size="large">
              Descargar Plantilla
            </Button>
            <Button className="buttonOutlined" icon={<ArrowLineUp size="1.3rem" />} size="large">
              Cargar Excel
            </Button>
            <Button size="large" type="primary" className="buttonAction" onClick={() => {}}>
              Registrar Usuario
            </Button>
          </Flex>
        </Flex>
      )}
    </main>
  );
};
// this is dummy data when the integrations is ready this will be remove
const options: SelectProps["options"] = [
  {
    label: "China",
    value: "china",
    emoji: "🇨🇳",
    desc: "China (中国)"
  },
  {
    label: "USA",
    value: "usa",
    emoji: "🇺🇸",
    desc: "USA (美国)"
  },
  {
    label: "Japan",
    value: "japan",
    emoji: "🇯🇵",
    desc: "Japan (日本)"
  },
  {
    label: "Korea",
    value: "korea",
    emoji: "🇰🇷",
    desc: "Korea (韩国)"
  }
];
const initialData: UserType = {
  info: {
    name: "",
    rol: [],
    cargo: "",
    email: "",
    phone: ""
  },
  contact: {
    responsibility: [],
    zone: [],
    channel: [],
    line: []
  }
};
const initialDataDummy: UserType = {
  info: {
    name: "Falcao Garcia",
    rol: ["Capitan"],
    cargo: "Delantero",
    email: "falkao@gmail.com",
    phone: "(+57) 123 456 789"
  },
  contact: {
    responsibility: ["goles"],
    zone: ["europe"],
    channel: ["caracol"],
    line: ["si"]
  }
};
