import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Message = styled.div`
  display: flex;
  background-color: rgba(229, 229, 229, 0.5);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  padding: 2px 20px;
`

type Props = {
  children: ReactNode
}

const ChatMetaMessage: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Message>{children}</Message>
    </Wrapper>
  )
}

export default ChatMetaMessage
