import { t } from "i18next";
import type { Experience } from "../../types";

export function getExperienceData(): Experience[] {
  return [
    {
      companyName: "IT Lean",
      positionName: "React Native Senior",
      description: t("experience_list.it"),
      iconName: "mobile",
      initialDate: new Date("2024-06-01T00:00:00-03:00"),
      isCurrentJob: true,
      finalDate: new Date(""),
    },
    {
      companyName: "Vortigo",
      positionName: "Fullstack Senior",
      description: t("experience_list.vortigo_full"),
      iconName: "api",
      initialDate: new Date("2023-12-01T00:00:00-03:00"),
      isCurrentJob: false,
      finalDate: new Date("2024-03-01T00:00:00-03:00"),
    },
    {
      companyName: "Vortigo",
      positionName: "Frontend Senior",
      description: t("experience_list.vortigo_react"),
      iconName: "desktop",
      initialDate: new Date("2023-12-01T00:00:00-03:00"),
      isCurrentJob: false,
      finalDate: new Date("2021-03-01T00:00:00-03:00"),
    },

    {
      companyName: "Nova",
      positionName: "Frontend Senior",
      description: t("experience_list.nova"),
      iconName: "desktop",
      initialDate: new Date("2019-04-01T00:00:00-03:00"),
      isCurrentJob: false,
      finalDate: new Date("2021-03-01T00:00:00-03:00"),
    },
    {
      companyName: "NPDI",
      positionName: "Fullstack Junior",
      description: t("experience_list.npdi"),
      iconName: "api",
      initialDate: new Date("2017-02-01T00:00:00-03:00"),
      isCurrentJob: false,
      finalDate: new Date("2018-11-01T00:00:00-03:00"),
    },
    {
      companyName: "KEYMAX",
      positionName: "Trainee Developer",
      description: t("experience_list.keymax"),
      iconName: "code",
      initialDate: new Date("2015-03-01T00:00:00-03:00"),
      isCurrentJob: false,
      finalDate: new Date("2017-01-01T00:00:00-03:00"),
    },
  ];
}
