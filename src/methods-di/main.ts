import { Dog } from './dog';
import { CliOutput } from './cli-output';

class DogService {
  createDog() {
    const output = new CliOutput();
    const dog = new Dog();
    dog.setOutPut(output);
    dog.dogs(['dog1', 'dog2', 'dog3']);
  }
}

const dogService = new DogService();
dogService.createDog();
