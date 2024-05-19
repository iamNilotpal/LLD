import type { IButton, ITextBox, IUIFactory, OS } from './types';

class WindowsButton implements IButton {
  click() {
    console.log('Button Clicked!');
  }
}

class WindowsTextBox implements ITextBox {
  input(val: string) {
    console.log(val);
  }
}

class MacButton implements IButton {
  click() {
    console.log('Button Clicked!');
  }
}

class MacTextBox implements ITextBox {
  input(val: string) {
    console.log(val);
  }
}

class WindowsFactory implements IUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createTextBox() {
    return new WindowsTextBox();
  }
}

class MacFactory implements IUIFactory {
  createButton() {
    return new MacButton();
  }

  createTextBox() {
    return new MacTextBox();
  }
}

export abstract class UIFactory {
  static createNewFactory(os: OS): IUIFactory {
    if (os === 'mac') return new MacFactory();
    if (os === 'windows') return new WindowsFactory();
    else throw new Error('❌❌❌❌ Invalid OS ❌❌❌❌');
  }
}
