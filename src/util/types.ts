export interface PlayerProps {
  url: string
}

export interface CreatePartyModal {
  isVisible: boolean,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface JoinPartyModal {
  isVisible: boolean,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}