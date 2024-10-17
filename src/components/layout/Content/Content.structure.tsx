import * as S from "./Content.styles";

const Content = (props: { id?: string } & React.PropsWithChildren) => {
  return <S.Content {...props} />;
};

export default Content;
