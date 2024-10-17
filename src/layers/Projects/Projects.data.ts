import { t } from "i18next";
import { projects } from "../../assets";
export function getProjectsData() {
  return [
    {
      description: t("projects_list.sirio"),
      imageAlt: "Sirio Libanes Web Image",
      imageSrc: projects.sirio,
      href: import.meta.env.VITE_SIRIO_URL ?? "",
      title: "App Sírio Libanes",
    },
    {
      description: t("projects_list.bb"),
      imageAlt: "App Store Banco do Brasil",
      imageSrc: projects.bb,
      href: import.meta.env.VITE_BB_URL ?? "",
      title: "App Banco do Brasil",
    },
    {
      description: t("projects_list.atena"),
      imageAlt: "Web Atena",
      imageSrc: projects.atena,
      href: import.meta.env.VITE_ATENA_URL ?? "",
      title: "Web Atena",
    },
    {
      description: t("projects_list.stuo"),
      imageAlt: "Web Stuo",
      imageSrc: projects.stuo,
      href: import.meta.env.VITE_STUO_URL ?? "",
      title: "Web Stuo",
    },
    {
      description: t("projects_list.superDigital"),
      imageAlt: "Web Superdigital",
      imageSrc: projects.superDigital,
      href: import.meta.env.VITE_SUPER_URL ?? "",
      title: "Web Superdigital",
    },
  ];
}
