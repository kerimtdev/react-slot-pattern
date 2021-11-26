import { Children, ReactNode } from "react";

interface UseSlotHookOptions {
  children: ReactNode | Array<ReactNode>;
  name: string;
  fallback?: ReactNode;
}

const useSlot = (options: UseSlotHookOptions): any => {
  const children: Record<string, any> = Children.toArray(options.children);
  const predicate = (child: Record<string, any>) => {
    return child?.props?.name === options.name;
  };

  if (children.some(predicate)) {
    return () => children.find(predicate).props?.children;
  }

  if (options.fallback) {
    return () => options.fallback;
  }

  return null;
};

export default useSlot;
