export class CliOutput {
  showDogs(dogs: string[]) {
    console.log(dogs);
  }
}

export interface ICliOutput {
  showDogs(dogs: string[]): void;
}
