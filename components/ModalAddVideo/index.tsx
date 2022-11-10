import { useContext } from "react";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { useUserContext } from "../../Context";

import {
  CloseModalContainer,
  CreatedMarkersContainer,
  CreatedMarkersList,
  Input,
  MarkerFieldContainer,
  Modal,
  ModalContainer,
  SaveButton,
  UrlFieldContainer,
} from "./styles";

const ModalAddVideo = () => {
  const {
    toggleModalVisibility,
    clearUrl,
    urlValue,
    setUrlValue,
    handleSubmit,
    onSubmit,
    register,
    markers,
    postVideos,
    day,
    setDay,
  } = useUserContext();

  return (
    <ModalContainer>
      <Modal>
        <CloseModalContainer>
          <h2>Faça suas alterações aqui</h2>
          <AiOutlineClose onClick={toggleModalVisibility} />
        </CloseModalContainer>
        <UrlFieldContainer>
          <AiOutlineCloseCircle size={25} onClick={clearUrl} />
          <input
            type="text"
            placeholder="URL :"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
          />
        </UrlFieldContainer>

        <Input
          type="text"
          placeholder="Dia da semana. Ex: Segunda-Feira"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />

        <MarkerFieldContainer onSubmit={handleSubmit(onSubmit)}>
          <textarea placeholder="Defina um marcador" {...register("title")} />
          <div>
            <input
              type="text"
              placeholder="Tempo"
              {...register("time_video")}
            />
            <button type="submit">Enviar</button>
          </div>
        </MarkerFieldContainer>

        <CreatedMarkersContainer>
          {markers.length > 0 ? (
            <CreatedMarkersList>
              {markers.map((mark, index) => (
                <li key={index}>
                  <span>{mark.time_video}</span>
                  <p>{mark.title}</p>
                </li>
              ))}
            </CreatedMarkersList>
          ) : (
            <span className="marker-empty">Sem marcadores</span>
          )}
        </CreatedMarkersContainer>
        <SaveButton type="submit" onClick={postVideos}>
          Salvar
        </SaveButton>
      </Modal>
    </ModalContainer>
  );
};

export default ModalAddVideo;
