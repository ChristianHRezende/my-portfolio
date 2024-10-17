import { ParagraphProps } from "antd/es/typography/Paragraph";
import * as S from "./Caption.styles";

const Caption = (props: ParagraphProps) => {
  return <S.Paragraph {...props} />;
};

export default Caption;
