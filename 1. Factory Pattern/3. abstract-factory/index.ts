import { UIFactory } from './factory';
import { OS } from './types';

function main() {
  const os: OS = Math.random() > 0.5 ? 'mac' : 'windows';

  const factory = UIFactory.createNewFactory(os);
  const btn = factory.createButton();
  const textbox = factory.createTextBox();

  console.log('OS', os);

  btn.click();
  textbox.input('Hello World!');
}

main();
