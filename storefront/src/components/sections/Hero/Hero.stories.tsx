import type { Meta, StoryObj } from "@storybook/react"

import { Hero } from "./Hero"

const meta: Meta<typeof Hero> = {
  component: Hero,
  decorators: (Story) => <Story />,
}

export default meta
type Story = StoryObj<typeof Hero>

export const FirstStory: Story = {
  args: {
    heading: "The community Marketplace",
    paragraph: "Where you put your resources matters. Buy from small businesses and spend local with your local community. Provide for your community.",
    image: "/images/hero/Image.jpg",
    buttons: [
      { label: "Purchase from the community", path: "#" },
      { label: "Provide for the community", path: "3" },
    ],
  },
}
