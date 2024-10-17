import { Flex } from "antd";
import { Footer, Heading, Paragraph } from "../../components";
import * as S from "./Contact.styles";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { colors } from "../../theme/variables";
import { SECTIONS } from "../../constants";

const mail = import.meta.env.VITE_EMAIL_ADDRESS;
const linkedin = import.meta.env.VITE_LINKEDIN_URL;
const github = import.meta.env.VITE_GITHUB_URL;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Footer id={SECTIONS.CONTACT}>
      <Flex align="start" justify="space-between" vertical gap={24}>
        <Heading level={3} color="primary">
          {t("contact")}
        </Heading>
        <Paragraph textAlign="left">{t("resume_footer")}</Paragraph>
        <Flex gap={12}>
          <S.MailIcon color={colors.secondaryText} size={18} />
          <Paragraph>
            <S.Link href={`mailto:${mail}`}>{mail}</S.Link>
          </Paragraph>
        </Flex>
        <S.IconsContainer gap={24}>
          <a href={linkedin} target="_blank">
            <FaLinkedin color={colors.secondaryText} size={24} />
          </a>
          <a href={github} target="_blank">
            <FaGithub color={colors.secondaryText} size={24} />
          </a>
        </S.IconsContainer>
      </Flex>
    </Footer>
  );
};

export default Contact;
