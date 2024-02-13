import {
  Button,
  ColorPicker,
  Flex,
  Input,
  Select,
  SelectProps,
  Space,
  Typography,
  Upload
} from "antd";
import { Controller, useForm } from "react-hook-form";
import { CaretLeft, Pencil } from "phosphor-react";

import "./projectformtab.scss";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface Props {
  onEditProject?: () => void;
  onSubmitForm: () => void;
  data?: ProyectType;
  statusForm: "create" | "edit" | "review";
}
type ProyectType = {
  general: {
    name: string;
    nit: string;
    currencies: string[];
    countries: string[];
    address: string;
  };
  contact: {
    name: string;
    position: string;
    email: string;
    phone: string;
  };
  personalizacion: {
    color: string;
    description: string;
  };
};
export const ProjectFormTab = ({
  onEditProject = () => {},
  onSubmitForm = () => {},
  statusForm = "review",
  data = initialData
}: Props) => {
  const defaultValues = statusForm === "create" ? {} : data;
  const { control } = useForm<ProyectType>({
    defaultValues,
    disabled: statusForm === "review"
  });

  const validationButtonText =
    statusForm === "create"
      ? "Crear Proyecto"
      : statusForm === "edit"
        ? "Guardar Cambios"
        : " Editar Proyecto";
  const onSubmit = () => {
    if (statusForm === "review") return onEditProject();
    onSubmitForm();
  };

  return (
    <form className="mainProyectsForm">
      <Flex component={"header"} className="headerProyectsForm">
        <Button
          type="text"
          size="large"
          href="/"
          className="buttonGoBack"
          icon={<CaretLeft size={"1.45rem"} />}
        >
          Ver Proyectos
        </Button>
        <Button style={{ display: "flex" }} icon={<Pencil size={"1.45rem"} />} onClick={onSubmit}>
          {validationButtonText}
        </Button>
      </Flex>
      <Flex component={"main"} vertical>
        {/* ------------Image Project-------------- */}
        <Flex vertical className="imageSection">
          <Upload listType="picture-card" style={{ width: "20%" }}>
            {"+ Subir"}
          </Upload>
          <Text>*Sube la imagen del logo del proyecto que vas a crear</Text>
        </Flex>
        {/* -----------------------------------General--------------------------------------- */}
        <Title level={4}>Informacion General</Title>
        <Flex component={"section"} className="generalProject" justify="flex-start">
          <Flex vertical className="containerInput">
            <Title level={5}>Nombre del Proyecto</Title>
            <Controller
              name="general.name"
              control={control}
              render={({ field }) => (
                <Input
                  className="input"
                  variant="borderless"
                  placeholder="Nombre del Proyecto"
                  {...field}
                />
              )}
            />
          </Flex>
          <Flex vertical className="containerInput">
            <Title level={5}>NIT</Title>
            <Controller
              name="general.nit"
              control={control}
              render={({ field }) => (
                <Input className="input" variant="borderless" placeholder="NIT" {...field} />
              )}
            />
          </Flex>
          <Flex vertical className="containerInput">
            <Title level={5}>Divisas</Title>
            <Controller
              name="general.currencies"
              control={control}
              render={({ field }) => (
                <Select
                  mode="multiple"
                  className="selectInput"
                  placeholder="select one country"
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
            <Title level={5}>Pais</Title>
            <Controller
              name="general.countries"
              control={control}
              render={({ field }) => (
                <Select
                  mode="multiple"
                  className="selectInput"
                  placeholder="select one country"
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
            <Title level={5}>Direccion</Title>
            <Controller
              name="general.address"
              control={control}
              render={({ field }) => (
                <Input className="input" variant="borderless" placeholder="Direccion" {...field} />
              )}
            />
          </Flex>
        </Flex>
        {/* -----------------------------------Contacto----------------------------------- */}
        <Title level={4}>Informacion de Contacto</Title>
        <Flex component={"section"} className="generalProject" justify="flex-start">
          <Flex vertical className="containerInput">
            <Title level={5}>Nombre</Title>
            <Controller
              name="contact.name"
              control={control}
              render={({ field }) => (
                <Input className="input" variant="borderless" placeholder="Nombre" {...field} />
              )}
            />
          </Flex>
          <Flex vertical className="containerInput">
            <Title level={5}>Posicion</Title>
            <Controller
              name="contact.position"
              control={control}
              render={({ field }) => (
                <Input className="input" variant="borderless" placeholder="Posicion" {...field} />
              )}
            />
          </Flex>
          <Flex vertical className="containerInput">
            <Title level={5}>Correo</Title>
            <Controller
              name="contact.email"
              control={control}
              render={({ field }) => (
                <Input className="input" variant="borderless" placeholder="Correo" {...field} />
              )}
            />
          </Flex>
          <Flex vertical className="containerInput">
            <Title level={5}>Telefono</Title>
            <Controller
              name="contact.phone"
              control={control}
              render={({ field }) => (
                <Input className="input" variant="borderless" placeholder="Telefono" {...field} />
              )}
            />
          </Flex>
        </Flex>
        {/* -----------------------------------Experiencia----------------------------------- */}
        <Title level={4}>Personalizer Proyecto</Title>
        <Flex component={"section"} className="generalProject" justify="flex-start">
          <Flex vertical className="containerInput">
            <Title level={5}>Color Personalizado</Title>
            <ColorPicker defaultValue="#1677ff" size="large" showText />
          </Flex>
          <Flex vertical className="containerInput">
            <Title level={5}>Descripcion</Title>
            <Controller
              name="personalizacion.description"
              control={control}
              render={({ field }) => (
                <TextArea
                  rows={2}
                  className="input"
                  variant="borderless"
                  placeholder="Ingresar Descripcion"
                  {...field}
                />
              )}
            />
          </Flex>
        </Flex>
      </Flex>
    </form>
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

const initialData: ProyectType = {
  general: {
    name: "Cruz Verde",
    nit: "01-123456789",
    currencies: ["china"],
    address: "Chapinero, Bogota DC, Colombia",
    countries: ["china"]
  },
  contact: {
    name: "Falcao Garcia",
    position: "Delantero",
    email: "tigre@gmaill.com",
    phone: "57 9999999"
  },
  personalizacion: {
    color: "#FFFFFF",
    description: "The best color"
  }
};
