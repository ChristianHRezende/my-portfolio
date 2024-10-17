import { t } from "i18next";
import { ExperienceDetail, Heading } from "../../components";
import { getExperienceData } from "./Experience.data";
import * as S from "./Experience.styles";
import { SECTIONS } from "../../constants";

const Experience = () => {
  const data = getExperienceData();
  return (
    <S.Container id={SECTIONS.EXPERIENCE} align="center" vertical gap={40}>
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