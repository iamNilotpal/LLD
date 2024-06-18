import type { IButton, ITextBox, IUIFactory, OS } from './types';

class WindowsButton implements IButton {
  click() {
    console.log('Windows button Clicked!');
  }
}

class WindowsTextBox implements ITextBox {
  input(val: string) {
    console.log(val);
  }
}

class MacButton implements IButton {
  click() {
    console.log('Mac button Clicked!');
  }
}

class MacTextBox implements ITextBox {
  input(val: string) {
    console.log(val);
  }
}

class LinuxButton implements IButton {
  click() {
    console.log('Linux button clicked.');
  }
}

class LinuxTextBox implements ITextBox {
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

class LinuxFactory implements IUIFactory {
  createButton() {
    return new LinuxButton();
  }

  createTextBox() {
    return new LinuxTextBox();
  }
}

export abstract class UIFactory {
  static createNewFactory(os: OS): IUIFactory {
    if (os === 'mac') return new MacFactory();
    if (os === 'linux') return new LinuxFactory();
    if (os === 'windows') return new WindowsFactory();
    else throw new Error('❌❌❌❌ Invalid OS ❌❌❌❌');
  }
}
