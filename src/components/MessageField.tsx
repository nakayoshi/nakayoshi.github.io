import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
  align-items: center;
  height: 54px;
  box-shadow: 0 2px 5px black;
`

const InputField = styled.input`
  border: 2px solid #e5e5e5;
  border-radius: 20px;
  flex-grow: 1;
  margin-right: 10px;
  height: 30px;
  padding-left: 10px;
`

const SendButtonWrapper = styled.div``

const SendButton = styled.button`
  background-color: #7f93c4;
  border-radius: 20px;
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
`

const SendButtonIcon = () => <FontAwesomeIcon icon={faPaperPlane} />

const SendButtonLabel = styled.span`
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
`

const MessageField = () => {
  return (
    <Wrapper>
      <InputField />
      <SendButtonWrapper>
        <SendButton>
          <SendButtonLabel>
            <SendButtonIcon />
          </SendButtonLabel>
        </SendButton>
      </SendButtonWrapper>
    </Wrapper>
  )
}

export default MessageField
