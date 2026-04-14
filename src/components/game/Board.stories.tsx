import type { Meta, StoryObj } from "@storybook/react";
import Board from "./Board";
import type { CellState } from "../../hooks/useGame";

const meta: Meta<typeof Board> = {
  title: "Game/Board",
  component: Board,
  tags: ["autodocs"],
  argTypes: {
    onFire: { action: "fire" },
  },
};

export default meta;

type Story = StoryObj<typeof Board>;

const empty = (size: number): CellState[] => Array(size * size).fill("empty");

export const Empty: Story = {
  args: {
    size: 5,
    board: empty(5),
  },
};

export const Playing: Story = {
  args: {
    size: 5,
    board: [
      "empty",
      "empty",
      "miss",
      "empty",
      "empty",
      "empty",
      "hit",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "miss",
      "empty",
      "empty",
      "empty",
      "hit",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
      "miss",
    ],
  },
};

export const HitsAndMisses: Story = {
  args: {
    size: 5,
    board: [
      "miss",
      "hit",
      "miss",
      "empty",
      "hit",
      "empty",
      "hit",
      "empty",
      "miss",
      "empty",
      "empty",
      "empty",
      "hit",
      "empty",
      "miss",
      "hit",
      "empty",
      "empty",
      "hit",
      "empty",
      "miss",
      "empty",
      "hit",
      "empty",
      "empty",
    ],
  },
};

export const AlmostFinished: Story = {
  args: {
    size: 5,
    board: [
      "hit",
      "hit",
      "hit",
      "miss",
      "hit",
      "hit",
      "hit",
      "hit",
      "hit",
      "hit",
      "hit",
      "miss",
      "hit",
      "hit",
      "hit",
      "hit",
      "hit",
      "hit",
      "hit",
      "hit",
      "miss",
      "hit",
      "hit",
      "hit",
      "hit",
    ],
  },
};
