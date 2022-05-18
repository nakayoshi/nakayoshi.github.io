import styled from "styled-components"
import { ReactNode, useEffect, useMemo } from "react"
import {
  LinkInfo,
  Message,
  MessageType,
  Meta,
  MetaMessage,
  OgpMessage,
  Others,
  Self,
  TextMessage,
  UserType,
} from "app/story/domain/message"
import Link from "next/link"
import { ChatOgpMessage } from "./ChatOgpMessage"

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

const takePadding = (messageType: MessageType) => {
  switch (messageType) {
    case TextMessage:
      return "10px"
    case OgpMessage:
      return "0"
    case MetaMessage:
      return "2px 20px"
    default:
      return 10
  }
}

const MessageWrapper = styled.li<{
  userType: UserType
  messageType: MessageType
}>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${(props) => takeJustifyContent(props.userType)};

  & > div {
    width: ${(props) => (props.messageType === OgpMessage ? "60%" : "auto")};
    padding: ${(props) => takePadding(props.messageType)};
    background-color: ${(props) => takeBackgroundColor(props.userType)};
  }
`

const MessageBaloon = styled.div`
  border-radius: 8px;
  margin: 10px 20px;
  max-width: 60%;
  font-size: 14px;

  & > span {
    color: rgba(0, 0, 0, 0.9);
  }
  a {
    color: #7f93c4;
  }
`

const MetaMessageBaloon = styled.div`
  margin: 10px;
  border-radius: 20px;
  font-size: 12px;

  & > span {
    color: rgba(255, 255, 255, 0.8);
  }
`

type Props = {
  message: Message
  onMounted: () => void
  isLast: boolean
}

const tagLinkElement = (text: string, link: LinkInfo) => {
  const texts = text.split(link.linkText) as ReactNode[]
  texts.splice(
    1,
    0,
    <Link href={link.url} passHref>
      <a>{link.linkText}</a>
    </Link>
  ) // "abc" -> [a,b,c]

  return texts.map((e, i) => <span key={i}>{e}</span>)
}

const softSplitMultiple = (textList: string[], link: LinkInfo) => {
  return textList.map((text) => {
    console.log(tagLinkElement(text, link))
    return tagLinkElement(text, link)
  })
}

const makeText = (message: Message) => {
  const links = message.links
  const text = message.text

  if (!text) {
    return ""
  }
  if (!links) {
    return text
  }

  const make = (index: number, textList: ReactNode[]): ReactNode[] => {
    const result: ReactNode[] = softSplitMultiple(
      textList as string[],
      links[index]
    ).flat()
    const nextIndex = index + 1
    if (links.length < nextIndex) return make(nextIndex, result)
    return result
  }

  return make(0, [text])
}

const ChatMessage: React.FC<Props> = ({ message, onMounted, isLast }) => {
  useEffect(() => {
    if (!isLast) {
      onMounted()
    }
  }, [onMounted, isLast])

  const messageText = useMemo(() => <span>{makeText(message)}</span>, [message])

  if (!message) {
    return <div />
  }
  const userType = message.userType
  const messageTypes = message.type
  const ogp = message.ogp

  return (
    <MessageWrapper userType={userType} messageType={messageTypes}>
      {userType === Meta ? (
        <MetaMessageBaloon>{messageText}</MetaMessageBaloon>
      ) : ogp ? (
        <MessageBaloon>
          <ChatOgpMessage ogp={ogp} />
        </MessageBaloon>
      ) : (
        <MessageBaloon>{messageText}</MessageBaloon>
      )}
    </MessageWrapper>
  )
}

export default ChatMessage
