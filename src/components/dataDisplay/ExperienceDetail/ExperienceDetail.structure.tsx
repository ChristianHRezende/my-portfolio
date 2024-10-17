import { Divider, Flex, Image } from "antd";
import { Heading, Paragraph } from "../../general";
import { useTranslation } from "react-i18next";
import { formatDateBrowser } from "../../../utils";
import type { Experience } from "../../../types";
import * as S from "./ExperienceDetail.styles";
import { colors } from "../../../theme/variables";
import { useIsMobileBreakpoint } from "../../../hooks";

type ExperienceDetailProps = Experience;

const ExperienceDetail = (props: ExperienceDetailProps) => {
  const {
    companyName,
    positionName,
    description,
    imageUrl,
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
          <Image
            alt={companyName}
            height={"48px"}
            preview={false}
            src={imageUrl}
            width={"48px"}
          />
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
