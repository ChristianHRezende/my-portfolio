import { Select } from "antd";
import { useTranslation } from "react-i18next";
import * as S from "./LanguageSelect.styles";

const { Option } = Select;

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: unknown) => {
    if (!lang) {
      throw new Error("could not get language");
    }
    i18n.changeLanguage(lang as string);
  };

  return (
    <S.Select defaultValue={i18n.language} onChange={handleLanguageChange}>
      <Option value="pt">PT</Option>
      <Option value="en">EN</Option>
    </S.Select>
  );
};

export default LanguageSelect;
