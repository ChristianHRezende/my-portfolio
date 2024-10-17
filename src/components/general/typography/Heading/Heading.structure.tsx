import * as S from "./Heading.styles";
import { HeadingProps } from "./Heading.types";

const Paragraph = (props: HeadingProps) => {
  const { level } = props;
  switch (level) {
    case 2:
      return <S.H2 {...props} />;
    case 3:
      return <S.H3 {...props} />;
    case 4:
      return <S.H4 {...props} />;
    default:
      return <S.H1 {...props} />;
  }
};

export default Paragraph;
