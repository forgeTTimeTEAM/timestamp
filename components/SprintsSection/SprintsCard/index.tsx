import { HiOutlineBookOpen } from "react-icons/hi";
import { useRouter } from "next/router";
import { IconContainer } from "../styles";
import { IProps } from "./interface";
import StyledSprintsCard from "./styles";

function SprintsCard({ module, sprint, date }: IProps) {
  const router = useRouter();

  return (
    <StyledSprintsCard
      role="button"
      onClick={() => router.push(`/sprint/${sprint}`)}
    >
      <h2>
        {module} - Sprint {sprint}
      </h2>
      <p>Atualizado em: {date}</p>

      <IconContainer>
        <HiOutlineBookOpen size={40} />
      </IconContainer>
    </StyledSprintsCard>
  );
}

export default SprintsCard;
