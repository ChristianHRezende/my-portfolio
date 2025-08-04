import { Divider, Flex } from "antd";
import {
  CodeOutlined,
  MobileOutlined,
  DesktopOutlined,
  ApiOutlined,
  DatabaseOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import { Heading, Paragraph } from "../../general";
import { useTranslation } from "react-i18next";
import { formatDateBrowser } from "../../../utils";
import type { Experience } from "../../../types";
import * as S from "./ExperienceDetail.styles";
import { colors } from "../../../theme/variables";
import { useIsMobileBreakpoint } from "../../../hooks";

type ExperienceDetailProps = Experience;

// Icon mapping for different technical roles
const getIconForPosition = (positionName: string) => {
  const position = positionName.toLowerCase();

  if (position.includes("react native") || position.includes("mobile")) {
    return <MobileOutlined style={{ fontSize: "48px", color: "#1890ff" }} />;
  }
  if (position.includes("frontend") || position.includes("react")) {
    return <DesktopOutlined style={{ fontSize: "48px", color: "#52c41a" }} />;
  }
  if (position.includes("fullstack") || position.includes("full stack")) {
    return <ApiOutlined style={{ fontSize: "48px", color: "#722ed1" }} />;
  }
  if (position.includes("backend") || position.includes("database")) {
    return <DatabaseOutlined style={{ fontSize: "48px", color: "#fa8c16" }} />;
  }
  if (position.includes("cloud") || position.includes("devops")) {
    return <CloudOutlined style={{ fontSize: "48px", color: "#13c2c2" }} />;
  }

  // Default icon for other positions
  return <CodeOutlined style={{ fontSize: "48px", color: "#1890ff" }} />;
};

// Icon mapping by iconName
const getIconByName = (iconName: string) => {
  const icon = iconName.toLowerCase();

  switch (icon) {
    case "mobile":
    case "mobileoutlined":
      return <MobileOutlined style={{ fontSize: "36px", color: "#1890ff" }} />;
    case "desktop":
    case "desktopoutlined":
      return <DesktopOutlined style={{ fontSize: "36px", color: "#52c41a" }} />;
    case "api":
    case "apioutlined":
      return <ApiOutlined style={{ fontSize: "36px", color: "#722ed1" }} />;
    case "database":
    case "databaseoutlined":
      return (
        <DatabaseOutlined style={{ fontSize: "36px", color: "#fa8c16" }} />
      );
    case "cloud":
    case "cloudoutlined":
      return <CloudOutlined style={{ fontSize: "36px", color: "#13c2c2" }} />;
    case "code":
    case "codeoutlined":
    default:
      return <CodeOutlined style={{ fontSize: "36px", color: "#1890ff" }} />;
  }
};

const ExperienceDetail = (props: ExperienceDetailProps) => {
  const {
    companyName,
    positionName,
    description,
    iconName,
    initialDate,
    isCurrentJob = false,
    finalDate,
  } = props;
  const isMobile = useIsMobileBreakpoint();
  const { t } = useTranslation();

  return (
    <S.Container vertical gap={24}>
      <Flex justify="space-between" align="center" gap={16} wrap={isMobile}>
        <S.Container gap={20} align="center">
          {iconName
            ? getIconByName(iconName)
            : getIconForPosition(positionName)}
          <Heading
            level={3}
            noDefaultMargin
            textAlign={isMobile ? "right" : "left"}
          >
            {`${positionName} ${t("at_f")} ${companyName}`}
          </Heading>
        </S.Container>
        <Paragraph fullWidth={false} textAlign={isMobile ? "center" : "right"}>
          {`${formatDateBrowser(initialDate)} - ${
            isCurrentJob ? t("present") : formatDateBrowser(finalDate)
          }`}
        </Paragraph>
      </Flex>
      <Paragraph textAlign="left">{description}</Paragraph>
      <Divider
        plain
        style={{
          backgroundColor: colors.card,
        }}
      />
    </S.Container>
  );
};

export default ExperienceDetail;
