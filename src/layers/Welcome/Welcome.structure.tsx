import { Flex } from "antd";
import { useTranslation } from "react-i18next";
import avatar from "../../assets/avatar/avatar.svg";
import { Heading, Paragraph } from "../../components";
import * as S from "./Welcome.styles";
import { SECTIONS } from "../../constants";
import { useIsMobileBreakpoint } from "../../hooks";

const mail = import.meta.env.VITE_EMAIL_ADDRESS;

const Welcome = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobileBreakpoint();
  const cvUrl =
    {
      en: import.meta.env.VITE_CV_EN_URL,
      pt: import.meta.env.VITE_CV_EN_URL,
    }[i18n.language] ?? "";

  return (
    <S.Container id={SECTIONS.WELCOME} align="center" vertical gap={40}>
      <S.Image src={avatar} alt="avatar" preview={false} />
      <Heading>
        {t("welcome")}
        <span>{t("welcome_highlight")}</span>
      </Heading>
      <Paragraph>{t("resume")}</Paragraph>
      <Flex
        justify={isMobile ? "center" : "space-between"}
        align="center"
        gap={60}
        wrap
      >
        <a href={`mailto:${mail}`}>
          <S.PrimaryButton type="primary" shape="round" size={"large"}>
            {t("get_in_touch")}
          </S.PrimaryButton>
        </a>
        <a href={cvUrl} target="_blank">
          <S.SecondaryButton type="text" shape="round" size={"large"}>
            {t("download_cv")}
          </S.SecondaryButton>
        </a>
      </Flex>
    </S.Container>
  );
};

export default Welcome;
