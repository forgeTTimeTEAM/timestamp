import Image from "next/image";

import { IVideoNotFoundProps } from "../interface";

import { FigureContainer } from "./styles";

function VideoNotFound({ searchInputValue }: IVideoNotFoundProps) {
  return (
    <FigureContainer>
      <div>
        <p>Infelizmente nenhum vídeo foi encontrado :(</p>
        <p>Exibindo resultados para: {searchInputValue} </p>
      </div>
      <Image
        src="/videoNotFoundAnimated.svg"
        alt="Vídeo não encontrado"
        width="320px"
        height="260px"
      />
    </FigureContainer>
  );
}

export default VideoNotFound;
