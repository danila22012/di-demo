import { ICliOutput } from './cli-output';

export class Dog {
  private output: any;

  setOutPut(output: ICliOutput) {
    this.output = output;
  }
  dogs(message: string[]) {
    this.output.showDogs(message);
  }
}
