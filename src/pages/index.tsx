import ChatMessage from "components/ChatMessage"
import ChatView from "components/ChatView"
import MessageField from "components/MessageField"
import type { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  background-color: #292841;
  /* & > div:first-child {
    position: relative;
    bottom: ;
  } */
  & > div:last-child {
    position: sticky;
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
