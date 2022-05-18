export const Self = "Self"
export const Others = "Others"
export const Meta = "Meta"
export type UserType = typeof Self | typeof Others | typeof Meta

export const TextMessage = "TextMessage"
export const OgpMessage = "OgpMessage"
export const MetaMessage = "MetaMessage"

export type MessageType =
  | typeof TextMessage
  | typeof OgpMessage
  | typeof MetaMessage

export type Message = {
  type: MessageType
  userType: UserType
  text?: string
  links?: LinkInfo[]
  ogp?: OgpInfo
}

const OgpSmall = "OgpSmall"
const OgpLarge = "OgpLarge"

export type OgpType = typeof OgpSmall | typeof OgpLarge

export type OgpInfo = {
  type: OgpType
  title: string
  description: string
  url: string
  imagePath: string
}

export type LinkInfo = {
  linkText: string
  url: URL
}

type MakeTextMessageParams = {
  text: string
  userType: UserType
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

export const makeOgpMessage = (userType: UserType, ogp: OgpInfo) => {
  return {
    type: OgpMessage,
    userType: userType,
    ogp: ogp,
  }
}
