import { faker } from '@faker-js/faker';
import { afterEach, describe, expect, it } from 'vitest';

afterEach(() => {
  faker.seed();
});

describe('reverse array', () => {
  it('should reverse the array', () => {
    faker.seed(1234);
    const title = faker.person.jobTitle();
    const description= faker.lorem.sentence();
    const animal = faker.animal.bear();

    const array = [title, description, animal];

    expect(array.reverse()).toStrictEqual([animal, description, title]);

    expect(array.reverse()).toMatchSnapshot();
  });
});