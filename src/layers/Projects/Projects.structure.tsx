import { useTranslation } from "react-i18next";
import { Card, Heading } from "../../components";
import { getProjectsData } from "./Projects.data";
import * as S from "./Projects.styles";
import { SECTIONS } from "../../constants";
import { PROJECTS_CONTAINER_TEST_ID } from "../../constants/testIds";

const Projects = () => {
  const data = getProjectsData();
  const { t } = useTranslation();

  return (
    <S.Container
      id={SECTIONS.PROJECTS}
      align="center"
      data-testid={PROJECTS_CONTAINER_TEST_ID}
      vertical
      gap={40}
    >
      <Heading level={2}>{t("projects")}</Heading>
      <S.CardContainer wrap gap={60} justify="center">
        {data.map((cardProps) => (
          <Card key={cardProps.title} {...cardProps} />
        ))}
      </S.CardContainer>
    </S.Container>
  );
};

export default Projects;
