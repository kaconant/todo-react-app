import type { Meta, StoryObj } from "@storybook/react";
import Notification from "./notification";

const meta: Meta<typeof Notification> = {
  component: Notification,
  title: "Components/Notification",
  tags: ["autodocs"],
  args: {
    text: "This is a notification!",
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {};

export const LongText: Story = {
  args: {
    text: "Heads up! This is a much longer notification to show how it wraps across multiple lines.",
  },
};
