import React from "react";
import { Cascader } from "antd";

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: "Estado de Usuario",
    label: "Estado de Usuario",
    children: [
      {
        value: "Zona Norte",
        label: "Zona Norte"
      },
      {
        value: "Zona Sur",
        label: "Zona Sur"
      }
    ]
  },
  {
    value: "Rol",
    label: "Rol",
    children: [
      {
        value: "Zona Norte",
        label: "Zona Norte"
      },
      {
        value: "Zona Sur",
        label: "Zona Sur"
      }
    ]
  },
  {
    value: "Zona",
    label: "Zona",
    children: [
      {
        value: "Zona Norte",
        label: "Zona Norte"
      },
      {
        value: "Zona Sur",
        label: "Zona Sur"
      }
    ]
  },
  {
    value: "Canal",
    label: "Canal",
    children: [
      {
        value: "Zona Norte",
        label: "Zona Norte"
      },
      {
        value: "Zona Sur",
        label: "Zona Sur"
      }
    ]
  },
  {
    value: "Linea",
    label: "Linea",
    children: [
      {
        value: "Zona Norte",
        label: "Zona Norte"
      },
      {
        value: "Zona Sur",
        label: "Zona Sur"
      }
    ]
  },
  {
    value: "Sublinea",
    label: "Sublinea",
    children: [
      {
        value: "Zona Norte",
        label: "Zona Norte"
      },
      {
        value: "Zona Sur",
        label: "Zona Sur"
      }
    ]
  }
];

// const onChange = (value: string[]) => {
//     console.log(value);
// };

// Just show the latest item.
const displayRender = (labels: string[]) => labels[labels.length - 1];

export const FilterUsers: React.FC = () => (
  <Cascader
    size="large"
    multiple
    options={options}
    expandTrigger="hover"
    placeholder="Filtros"
    displayRender={displayRender}
    // onChange={onChange}
  />
);
