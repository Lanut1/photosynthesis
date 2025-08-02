import ParagraphM from "@/components/typography/paragraphM";
import styled from "@emotion/styled";
import Image from "next/image";

interface ImageBlockProps {
  image: string;
  text: string;
  className?: string;
  priority?: boolean;
}

const ImageWrapperStyled = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  aspect-ratio: 2 / 3 ;
  border-radius: 1rem;
  overflow: hidden;
`;

const ImageBlock = ({ image, text, className, priority = false }: ImageBlockProps) => {
  return (
    <>
      <ImageWrapperStyled className={className}>
        <Image fill sizes="(max-width: 768px) 100vw, 50vw" src={image} alt={text} priority={priority}/>
      </ImageWrapperStyled> 
      <ParagraphM>{text}</ParagraphM>
    </>
  );
};

export default ImageBlock;