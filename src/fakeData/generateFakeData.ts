import { AnimalsModel } from '@/interfaces/animals';
import { faker } from '@faker-js/faker';

const generateFakeAnimal = (search: string): AnimalsModel => {
  const animalFaker: any = faker.animal;

  if (animalFaker.hasOwnProperty(search) && typeof animalFaker[search] === 'function') {
    const getType = () => animalFaker[search]();
    return {
      title: getType(),
      id: faker.string.uuid(),
      image: faker.image.url(),
      description: faker.lorem.sentence(),
      type: search
    };
  } else {
    return {
      title: `No results for ${search}` ,
      id: faker.string.uuid(),
      image: '',
      description: 'Try looking for: insect, fish, horse, crocodília, bear, cetacean, cow, rabbit, cat, snake, dog, bird.',
      type: search
    };
  }
};

export const generateFakeAnimals = (length: number, search: string) => {
  const animals: AnimalsModel[] = [];

  Array.from({ length: length }).forEach(() => {
    animals.push(generateFakeAnimal(search))
  });

  return animals;
};
