import { Flex, Layout } from "antd";
import { LogoLight } from "../../components";
import * as S from "./Header.styles";
import { items } from "./Header.data";

const Header = () => {
  return (
    <Layout.Header>
      <Flex align="center" justify="space-between">
        <LogoLight width={100} height={100} />
        <S.Menu theme="dark" mode="horizontal" items={items} />
      </Flex>
    </Layout.Header>
  );
};

export default Header;
