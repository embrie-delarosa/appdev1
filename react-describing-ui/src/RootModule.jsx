import { greetA } from './ModuleA.jsx';
import { greetB } from './ModuleB.jsx';
import { greetC } from './ModuleC.jsx';

export default function rootGreet() {
  console.log('Hello from RootModule');
  greetA();
  greetB();
  greetC();
}