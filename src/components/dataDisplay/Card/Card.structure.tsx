import { Image } from "antd";
import * as S from "./Card.styles";

export interface CardProps {
  description: string;
  imageAlt: string;
  imageSrc: string;
  href: string;
  title: string;
}

const Card = (props: CardProps) => {
  const { description, imageAlt, imageSrc, href, title } = props;

  return (
    <a href={href}>
      <S.Card
        hoverable
        cover={
          <Image
            preview={false}
            alt={imageAlt}
            src={imageSrc}
            height={"225px"}
            width={"100%"}
          />
        }
      >
        <S.Meta title={title} description={description} />
      </S.Card>
    </a>
  );
};

export default Card;
