import { useTranslation } from "react-i18next";

import { Heading } from "../../components";
import { getStackList } from "./ExperiencesWith.data";
import * as S from "./ExperiencesWith.styles";
import { EXPERIENCE_WITH_CONTAINER_TEST_ID } from "../../constants/testIds";

const Experiences = () => {
  const { t } = useTranslation();
  return (
    <S.Container
      align="center"
      data-testid={EXPERIENCE_WITH_CONTAINER_TEST_ID}
      gap={40}
      vertical
    >
      <Heading level={3}>{t("experience_with")}</Heading>
      <S.IconsContainer gap={30} wrap justify="center">
        {getStackList().map(({ icon: Icon, href, ...restProps }) => (
          <a key={restProps.title} href={href} target="_blank">
            <Icon {...restProps} />
          </a>
        ))}
      </S.IconsContainer>
    </S.Container>
  );
};

export default Experiences;
