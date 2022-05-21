import { Meta, User } from "./user"

export const TextMessage = "TextMessage"
export const OgpMessage = "OgpMessage"
export const MetaMessage = "MetaMessage"

export type MessageType =
  | typeof TextMessage
  | typeof OgpMessage
  | typeof MetaMessage

export type Message = {
  type: MessageType
  userType?: User
  text?: string
  links?: LinkInfo[]
  ogp?: OgpInfo
}

export const Small = "OgpSmall"
export const Large = "OgpLarge"

export type OgpSize = typeof Small | typeof Large

export type OgpInfo = {
  size: OgpSize
  title: string
  description: string
  url: string
  imagePath: string
}

export type LinkInfo = {
  linkText: string
  url: string
}

type MakeTextMessageParams = {
  text: string
  userType: User
  links?: LinkInfo[]
}

export const makeTextMessage = (params: MakeTextMessageParams): Message => {
  return {
    type: TextMessage,
    text: params.text,
    userType: params.userType,
    links: params.links,
  }
}

export const makeMetaMessage = (text: string): Message => {
  return {
    type: MetaMessage,
    text: text,
    userType: Meta,
  }
}

export const makeOgpMessage = (userType: User, ogp: OgpInfo): Message => {
  return {
    type: OgpMessage,
    userType: userType,
    ogp: ogp,
  }
}
