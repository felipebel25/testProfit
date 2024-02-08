import { Button, Flex, Input, Select, SelectProps, Space, Typography } from "antd";
import { Info, Pencil } from "phosphor-react";

import "./newuserprojectform.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface Props {
  onIsEditProject: () => void;
}

export const NewUserProjectForm = ({ onIsEditProject }: Props) => {
  return (
    <main className="newUserProjectForm">
      <Flex vertical component={"section"}>
        <Flex gap={"4rem"} component={"main"}>
          {/* -----------------------------------Informacion del Usuario--------------------------------------- */}
          <Flex component={"section"} vertical className="generalProject">
            <Flex gap={"0.8rem"}>
              <Info size={"1.85rem"} />
              <Title level={3}>Informacion del Usuario</Title>
            </Flex>
            <Title level={4}>Nombre</Title>
            <Input className="input" variant="borderless" placeholder="Nombre" />
            <Title level={4}>Rol</Title>
            <Select
              mode="multiple"
              className="selectInput"
              placeholder="Selecciona un rol"
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
            <Title level={4}>Posicion</Title>
            <Select
              mode="multiple"
              className="selectInput"
              placeholder="Selecciona una posicion"
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
            <Title level={4}>Email</Title>
            <Input className="input" variant="borderless" placeholder="Email" />
            <Title level={4}>Telefono</Title>
            <Input className="input" variant="borderless" placeholder="Telefono" />
          </Flex>

          {/* -----------------------------------Experiencia----------------------------------- */}
          <Flex component={"section"} vertical className="generalProject">
            <Title level={3}>Reglas de Proyecto</Title>
            <Title level={4}>Responsabilidad</Title>
            <Select
              mode="multiple"
              className="selectInput"
              placeholder="Selecciona una Responsabilidad"
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
            <Title level={4}>Zona</Title>
            <Select
              mode="multiple"
              className="selectInput"
              placeholder="Selecciona una Zona"
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
            <Title level={4}>Descripcion</Title>
            <TextArea className="input" variant="borderless" placeholder="Descripcion" rows={4} />
          </Flex>
          <Flex component={"section"} className="generalProject" justify="flex-end">
            <Flex gap={"1rem"}>
              <Button className="buttonAction" icon={<Pencil size="1.45rem" />} size="large">
                Guardar
              </Button>
              <Button size="large" className="buttonAction" onClick={onIsEditProject}>
                Descartar
              </Button>
            </Flex>
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
