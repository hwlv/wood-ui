import React from 'react'
import type { Meta, StoryObj } from "@storybook/react"
import { Input } from './input'

const meta ={
  title: 'Input',
  id: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const ADefault: Story = {
  name: "默认的 Input",
  args: {
    placeholder: "漂亮的 Input",
  },
}

export const BDisabled: Story = {
  name: "被禁用的 Input",
  args: {
    placeholder: "disabled input",
  disabled: true
  },
}

export const CIcon: Story = {
  name: "带图标的 Input",
  args: {
    placeholder: 'input with icon',
    icon: 'search'
  },
}

export const DSizeInput = () => (
  <>
    <Input
      defaultValue="large size"
      size="lg"
    />
    <Input
      placeholder="small size"
      size="sm"
    />
  </>
)
DSizeInput.storyName = '大小不同的 Input'


export const EPandInput = () => (
  <>
    <Input
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      defaultValue="google"
      append=".com"
    />

  </>
)

EPandInput.storyName = '带前后缀的 Input'

