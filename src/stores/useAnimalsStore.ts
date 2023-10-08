import { AnimalsModel } from '@/interfaces/animals';
import { create } from 'zustand';

export interface AnimalProps {
  animals: AnimalsModel[];
  setAnimals: (animal: AnimalsModel[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useAnimalStore = create<AnimalProps>((set) => ({
  animals: [],
  isLoading: false,
  setAnimals: (animal) => set(() => ({ animals: animal })),
  setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
}));

export default useAnimalStore;
