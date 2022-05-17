import ChatView from "components/ChatView"
import MessageField from "components/MessageField"
import type { NextPage } from "next"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  background-color: #292841;
  width: 100%;
  height: 100%;
  & > div:first-child {
    position: relative;
    top: 0;
    padding-bottom: 74px;
  }
  & > div:last-child {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const Home: NextPage = () => {
  return (
    <Wrapper>
      <ChatView />
      <MessageField />
    </Wrapper>
  )
}

export default Home
