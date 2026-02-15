// src/components/Button/Button.types.ts
export interface ButtonProps {
  children: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}
