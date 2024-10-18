import { Flex } from "antd";
import { LogoLight } from "../../components";
import * as S from "./Header.styles";
import { items } from "./Header.data";
import { useIsMobileBreakpoint } from "../../hooks";
import { LanguageSelect } from "../../components/dataEntry";
import { HEADER_CONTAINER_TEST_ID } from "../../constants/testIds";

const Header = () => {
  const isMobile = useIsMobileBreakpoint();
  const menuMode = isMobile ? "vertical" : "horizontal";
  return (
    <S.Header data-testid={HEADER_CONTAINER_TEST_ID}>
      <Flex flex={1} align="center" justify="space-between" vertical={isMobile}>
        <Flex gap={24} align="center">
          <LogoLight width={70} height={70} />
          <LanguageSelect />
        </Flex>
        <S.Menu hidden={isMobile} theme="dark" mode={menuMode} items={items} />
      </Flex>
    </S.Header>
  );
};

export default Header;
