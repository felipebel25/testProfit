import { Flex, Typography } from "antd";
import "./pricesstatus.scss";
const { Text, Title } = Typography;
export const PricesStatus = () => {
  return (
    <Flex vertical className="mainPricesStatus">
      <Title className="totalPricesStatus" level={3}>
        USD 0,00
      </Title>
      <Flex className="sectionPrice">
        <Text className="textPrice">
          <strong>Vencidas</strong> p/mes
        </Text>
        <Text className="priceExpired">USD 0,00</Text>
      </Flex>
      <Flex className="sectionPrice">
        <Text className="textPrice">
          <strong>No Vencidas</strong> p/mes
        </Text>
        <Text className="priceNotExpired">USD 0,00</Text>
      </Flex>
    </Flex>
  );
};
