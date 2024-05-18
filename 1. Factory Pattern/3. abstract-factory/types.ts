export interface IButton {
  click: () => void;
}

export interface ITextBox {
  input: (value: string) => void;
}

export interface IUIFactory {
  createButton: () => IButton;
  createTextBox: () => ITextBox;
}

export type OS = 'mac' | 'windows';
