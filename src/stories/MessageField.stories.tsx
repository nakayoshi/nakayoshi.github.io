import { ComponentMeta } from "@storybook/react"

import MessageField from "../components/MessageField"
export default {
  title: "Story/MessageField",
  component: MessageField,
} as ComponentMeta<typeof MessageField>

const Template = () => <MessageField />

export const Primary = Template.bind({})
