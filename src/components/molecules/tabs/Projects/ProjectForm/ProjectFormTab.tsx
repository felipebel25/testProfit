import { Button, Flex, Input, Select, SelectProps, Space, Typography } from "antd";
import { Info, Pencil } from "phosphor-react";

import "./projectformtab.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface Props {
  onIsEditProject: () => void;
}

export const ProjectFormTab = ({ onIsEditProject }: Props) => {
  return (
    <main className="mainProyectsForm">
      <Flex vertical component={"section"}>
        <Flex component={"header"} className="headerProyectsForm" justify="space-between">
          <Flex align="center">
            <Info size={"1.8rem"} />
            <Title level={2} style={{ marginLeft: "1rem", marginBottom: "0" }}>
              Información del proyecto
            </Title>
          </Flex>
          <Flex gap={"1rem"}>
            <Button className="buttonAction" icon={<Pencil size="1.45rem" />} size="large">
              Guardar
            </Button>
            <Button size="large" className="buttonAction" onClick={onIsEditProject}>
              Descartar
            </Button>
          </Flex>
        </Flex>
        <Flex gap={"4rem"} component={"main"}>
          {/* -----------------------------------General--------------------------------------- */}
          <Flex component={"section"} vertical className="generalProject">
            <Title level={3}>General</Title>
            <Title level={4}>Nombre del Proyecto</Title>
            <Input className="input" variant="borderless" placeholder="Nombre del Proyecto" />
            <Title level={4}>NIT</Title>
            <Input className="input" variant="borderless" placeholder="NIT" />
            <Title level={4}>Divisas</Title>
            <Select
              mode="multiple"
              className="selectInput"
              placeholder="select one country"
              defaultValue={["china"]}
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
            />
            <Title level={4}>Pais</Title>
            <Select
              mode="multiple"
              className="selectInput"
              placeholder="select one country"
              defaultValue={["china"]}
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
            />
            <Title level={4}>Direccion</Title>
            <Input className="input" variant="borderless" placeholder="Direccion" />
          </Flex>
          {/* -----------------------------------Contacto----------------------------------- */}
          <Flex component={"section"} vertical className="generalProject">
            <Title level={3}>Contacto</Title>
            <Title level={4}>Nombre</Title>
            <Input className="input" variant="borderless" placeholder="Nombre" />
            <Title level={4}>Posicion</Title>
            <Input className="input" variant="borderless" placeholder="Posicion" />
            <Title level={4}>Correo</Title>
            <Input className="input" variant="borderless" placeholder="Correo" />
            <Title level={4}>Telefono</Title>
            <Input className="input" variant="borderless" placeholder="Telefono" />
          </Flex>
          {/* -----------------------------------Experiencia----------------------------------- */}
          <Flex component={"section"} vertical className="generalProject">
            <Title level={3}>Experiencia</Title>
            <Title level={4}>Color Indicativo</Title>
            <Input className="input" variant="borderless" placeholder="Color Indicativo" />
            <Title level={4}>Descripcion</Title>
            <TextArea className="input" variant="borderless" placeholder="Descripcion" rows={4} />
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};
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
