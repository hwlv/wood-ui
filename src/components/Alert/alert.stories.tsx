import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import Alert from "./alert"

const meta = {
  title: "Alert",
  id: "Alert",
  component: Alert,
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const ADefaultAlert: Story = {
  args: {
    title: "this is alert!",
  },
  name: "基本样式",
}

export const CDescAlert: Story = {
  args: {
    title: "提示标题欧亲",
    description: "this is a long description",
  },
  name: "带描述的 Alert",
}

export const BStylesAlert= {
  name: "不同样式的 Alert",
  render: () => (
    <>
      <Alert title="this is Success" type="success"></Alert>
      <Alert title="this is Danger!" type="danger"></Alert>
      <Alert title="this is Warning!" type="warning" closable={false}></Alert>
    </>
  ),
}
