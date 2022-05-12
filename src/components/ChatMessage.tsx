import { ReactNode } from "react"
import styled from "styled-components"

const MyMessageBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

const OthersMessageBox = styled(MyMessageBox)`
  justify-content: flex-start;
`

const MyMessage = styled.div`
  align-items: flex-center;
  background-color: #93df84;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 20px;
  max-width: 60%;
`

const OthersMessage = styled(MyMessage)`
  background-color: white;
`

type Props = {
  isMine: boolean
  children: ReactNode
}

const ChatMessage: React.FC<Props> = ({ isMine, children }) => {
  if (isMine) {
    return (
      <MyMessageBox>
        <MyMessage>{children}</MyMessage>
      </MyMessageBox>
    )
  }
  return (
    <OthersMessageBox>
      <OthersMessage>{children}</OthersMessage>
    </OthersMessageBox>
  )
}

export default ChatMessage
