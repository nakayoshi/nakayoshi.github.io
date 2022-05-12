import styled from "styled-components"
import ChatMessage from "./ChatMessage"
import ChatMetaMessage from "./ChatMetaMessage"

const Wrapper = styled.div`
  background-color: #292841;
  width: 100%;
  padding: 10px 0;
`

const ChatView = () => {
  return (
    <Wrapper>
      <ChatMetaMessage>観測者がログインしました</ChatMetaMessage>
      <ChatMessage isMine={false}>nakayoshi.danceへようこそ</ChatMessage>
      <ChatMessage isMine={false}>
        私たちは私たちのことを団体であるとは考えていません
      </ChatMessage>
      <ChatMessage isMine={false}>
        あくまで個人間のネットワークなのです
      </ChatMessage>
      <ChatMessage isMine={true}>それを団体っていうんじゃないの？</ChatMessage>
      <ChatMessage isMine={true}>それを団体っていうんじゃないの？</ChatMessage>
      <ChatMessage isMine={true}>それを団体っていうんじゃないの？</ChatMessage>
      <ChatMessage isMine={true}>それを団体っていうんじゃないの？</ChatMessage>
      <ChatMessage isMine={true}>それを団体っていうんじゃないの？</ChatMessage>
      <ChatMessage isMine={true}>それを団体っていうんじゃないの？</ChatMessage>
      <ChatMessage isMine={true}>それを団体っていうんじゃないの？</ChatMessage>
      <ChatMessage isMine={true}>それを団体っていうんじゃないの？</ChatMessage>
    </Wrapper>
  )
}

export default ChatView
