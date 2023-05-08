import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
//import WelcomeMDX from '../Welcome/Welcome.stories.mdx'
import Button from "./button"

// https://github.com/storybookjs/storybook/issues/15574

const meta = {
  title: "Button",
  component: Button,
  // parameters: {
  //   docs: {
  //     page: WelcomeMDX
  //   }
  // }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const ADefault: Story = {
  name: "默认按钮样式",
  args: {
    children: "Default Button",
  },
}

// export const Large = Template.bind({})
// Large.args = {
//   size: 'lg',
//   children: 'Large Button',
// }
// export const Small = Template.bind({})
// Small.args = {
//   size: 'sm',
//   children: 'Small Button',
// }
// export const Primary = Template.bind({})
// Primary.args = {
//   btnType: 'primary',
//   children: 'Primary Button',
// }
// export const Danger = Template.bind({})
// Danger.args = {
//   btnType: 'danger',
//   children: 'Danger Button',
// }
// export const Link = Template.bind({})
// Link.args = {
//   btnType: 'link',
//   children: 'Link Button',
//   href: 'https://google.com'
// }

export const BButtonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
)
BButtonWithSize.storyName = "不同尺寸的按钮"

export const CButtonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com">
      {" "}
      link button{" "}
    </Button>
  </>
)

CButtonWithType.storyName = "不同类型的按钮"
