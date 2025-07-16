import ParagraphM from "@/components/typography/paragraphM";
import styled from "@emotion/styled";
import Image from "next/image";

interface ImageBlockProps {
  image: string;
  text: string;
  className?: string;
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 0.5rem;
  width: calc(50% - 0.25rem);
`;

const ImageWrapperStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  aspect-ratio: 2 / 3 ;
  border-radius: 1rem;
  overflow: hidden;
`;

const ImageBlock = ({ image, text, className }: ImageBlockProps) => {
  return (
    <ContainerStyled className={className}>
      <ImageWrapperStyled>
        <Image fill src={image} alt={text} />
      </ImageWrapperStyled> 
      <ParagraphM>{text}</ParagraphM>
    </ContainerStyled>
  );
};

export default ImageBlock;