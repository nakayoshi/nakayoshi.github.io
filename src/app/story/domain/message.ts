import { User } from "./user"

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
