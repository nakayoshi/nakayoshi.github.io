import styled from "styled-components"
import { useEffect, useMemo } from "react"
import {
  Message,
  MessageType,
  MetaMessage,
  OgpMessage,
  TextMessage,
} from "app/story/domain/message"
import Link from "next/link"
import { ChatOgpMessage } from "./ChatOgpMessage"
import { Others, Self, User } from "app/story/domain/user"

const takeJustifyContent = (userType?: User) => {
  switch (userType) {
    case Self:
      return "flex-end"
    case Others:
      return "flex-start"
    default:
      return "center"
  }
}

const takeBackgroundColor = (userType?: User) => {
  switch (userType) {
    case Self:
      return "#93df84"
    case Others:
      return "white"
    default:
      return "rgba(229, 229, 229, 0.5)"
  }
}

const takePadding = (messageType?: MessageType) => {
  switch (messageType) {
    case TextMessage:
      return "10px"
    case OgpMessage:
      return "0"
    case MetaMessage:
      return "2px 20px"
    default:
      return "10px"
  }
}

export const MessageWrapper = styled.li<{
  userType?: User
  messageType?: MessageType
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

export const MessageBaloon = styled.div`
  border-radius: 8px;
  margin: 10px 20px;
  max-width: 280px;
  font-size: 14px;

  & > span {
    display: block;
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

const splitSoft = (text: string, separator: string) => {
  const exp = new RegExp(`(${separator})`)
  return text.split(exp)
}

const makeSplittedLinkText = (message: Message) => {
  const links = message.links
  const text = message.text

  if (!text) {
    return [""]
  }
  if (!links) {
    return [text]
  }

  const make = (index: number, textList: string[]): string[] => {
    const link = links[index]

    const result = textList.map((text) => splitSoft(text, link.linkText))

    if (links.length > index + 1) {
      return make(index + 1, result.flat())
    }
    return result.flat()
  }

  return make(0, [text])
}

const tagLinkText = (message: Message) => {
  const splitted = makeSplittedLinkText(message)
  const links = message.links
  if (!links) {
    return [message.text]
  }
  return splitted.map((text) => {
    const filterredLinks = links.filter((link) => link.linkText === text)
    if (filterredLinks.length === 0) {
      return text
    } else {
      const link = filterredLinks[0]
      return (
        <Link href={link.url}>
          <a>{link.url}</a>
        </Link>
      )
    }
  })
}

const ChatMessage: React.FC<Props> = ({ message, onMounted, isLast }) => {
  useEffect(() => {
    if (!isLast) {
      onMounted()
    }
  }, [onMounted, isLast])

  const messageText = useMemo(() => {
    const makedText = tagLinkText(message)
    return (
      <span>
        {makedText.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </span>
    )
  }, [message])

  if (!message) {
    return <div />
  }
  const userType = message.userType
  const messageTypes = message.type
  const ogp = message.ogp

  return (
    <MessageWrapper userType={userType} messageType={messageTypes}>
      {!userType ? (
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
