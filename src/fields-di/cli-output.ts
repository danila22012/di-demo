export class CliOutput {
  showDogs(dogs: string[]) {
    console.log(dogs);
  }
}
export interface ICliOutput {
  showDogs(message: string[]): void;
}
