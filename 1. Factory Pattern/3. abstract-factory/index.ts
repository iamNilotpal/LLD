import { UIFactory } from './factory';
import { OS } from './types';

function main() {
  const random = Math.random();
  const os: OS = random >= 0.6 ? (random >= 0.3 ? 'linux' : 'mac') : 'windows';

  const factory = UIFactory.createNewFactory(os);
  const btn = factory.createButton();
  const textbox = factory.createTextBox();

  btn.click();
  textbox.input('Hello World!');
}

main();
