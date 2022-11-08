import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { StyledContent, StyledTrigger } from "./styles";
import Image from "next/image";
import { useUserContext } from "../../Context";

function AvatarIcon() {
  const { changeTheme } = useUserContext();

  return (
    <DropdownMenu.Root>
      <StyledTrigger>
        <Avatar.Root>
          <Avatar.Image src="test" alt="Usuário" />
          <Avatar.Fallback>
            <Image
              src="/displayUserIcon.svg"
              alt="Display Icon"
              layout="fill"
            />
          </Avatar.Fallback>
        </Avatar.Root>
      </StyledTrigger>

      <DropdownMenu.Portal>
        <StyledContent>
          <DropdownMenu.Item asChild>
            <button onClick={changeTheme}>Tema</button>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item asChild>
            <button>Sair</button>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow />
        </StyledContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default AvatarIcon;
