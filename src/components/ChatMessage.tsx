import styled from "styled-components"
import { useEffect } from "react"
import { Message, Meta, Others, Self, UserType } from "app/story/domain/message"

const takeJustifyContent = (userType: UserType) => {
  switch (userType) {
    case Self:
      return "flex-end"
    case Others:
      return "flex-start"
    case Meta:
      return "center"
    default:
      return "flex-end"
  }
}

const takeBackgroundColor = (userType: UserType) => {
  switch (userType) {
    case Self:
      return "#93df84"
    case Others:
      return "white"
    case Meta:
      return "rgba(229, 229, 229, 0.5)"
    default:
      return "#93df84"
  }
}

const MessageWrapper = styled.li<{ userType: UserType }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${(props) => takeJustifyContent(props.userType)};

  & > div {
    background-color: ${(props) => takeBackgroundColor(props.userType)};
  }
`

const MessageBaloon = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin: 10px 20px;
  max-width: 60%;
  font-size: 14px;

  & > span {
    color: rgba(0, 0, 0, 0.9);
  }
`

const MetaMessageBaloon = styled.div`
  padding: 2px 20px;
  margin: 10px;
  border-radius: 20px;
  font-size: 12px;

  & > span {
    color: rgba(255, 255, 255, 0.8);
  }
`

type Props = {
  message?: Message
  onMounted: () => void
  isLast: boolean
}

const ChatMessage: React.FC<Props> = ({ message, onMounted, isLast }) => {
  useEffect(() => {
    if (!isLast) {
      onMounted()
    }
  }, [onMounted, isLast])

  if (!message) {
    return <div />
  }
  const userType = message.userType

  return (
    <MessageWrapper userType={userType}>
      {userType === Meta ? (
        <MetaMessageBaloon>
          <span>{message.text}</span>
        </MetaMessageBaloon>
      ) : (
        <MessageBaloon>
          <span>{message.text}</span>
        </MessageBaloon>
      )}
    </MessageWrapper>
  )
}

export default ChatMessage
