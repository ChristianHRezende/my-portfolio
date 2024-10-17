import * as S from "./Header.styles";

const Header = (props: { id: string } & React.PropsWithChildren) => {
  return <S.Header {...props} />;
};

export default Header;
