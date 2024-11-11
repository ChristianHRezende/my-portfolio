import { ExperienceDetail, Heading } from "../../components";
import { getExperienceData } from "./Experience.data";
import * as S from "./Experience.styles";
import { SECTIONS } from "../../constants";
import { EXPERIENCE_CONTAINER_TEST_ID } from "../../constants/testIds";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const data = getExperienceData();
  return (
    <S.Container
      id={SECTIONS.EXPERIENCE}
      align="center"
      data-testid={EXPERIENCE_CONTAINER_TEST_ID}
      vertical
      gap={40}
    >
      <Heading level={2} theme="gradient">
        {t("experience")}
      </Heading>
      {data.map((experience) => (
        <ExperienceDetail
          key={`${experience.positionName}-${experience.companyName}`}
          {...experience}
        />
      ))}
    </S.Container>
  );
};

export default Experience;
