import React from "react";

const Slot: React.FC<{
  name: string;
}> = () => null;

const withSlot = (Component: any) => {
  Component.Slot = Slot;
  return Component;
};

export default withSlot;
