'use client';
import CardResult from '@/components/CardResult';
import HeaderResults from '@/components/HeaderResults';
import { AnimalsModel } from '@/interfaces/animals';
import useAnimalStore from '@/stores/useAnimalsStore';
import styles from '@/styles/results.module.css';
import React, { useEffect, useState } from 'react';

export default function Results() {
  const { animals, isLoading } = useAnimalStore();
  const [selectedId, setSelectedId] = useState('');
  const [filteredAnimals, setFilteredAnimals] = useState<AnimalsModel[] | null>(null);

  const handleShowCard = (id: string) => {
    setSelectedId(id);
  }

  useEffect(() => {
    if (animals.length > 0 && animals[0].title.includes("No results")) {
      setFilteredAnimals([animals[0]]);
    } else {
      setFilteredAnimals(animals);
    }
  }, [animals]);

  return (
    <main>
      <HeaderResults />
      <div className={styles.main}>
        <div className={styles.left_aside}>
          {!isLoading ? (
            <div>
              {filteredAnimals?.map((item, index) => (
                <div key={index} className={styles.results_container}>
                  <div onClick={() => handleShowCard(item.id)}>
                    <h6>{item.image}</h6>
                    <h2>{item.title.includes('No results for  ') ? '' : item.title}</h2>
                    <h4>{item.description}</h4>
                  </div>
                  {selectedId === item.id && !item.title.includes('No results') && (
                    <CardResult
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      setSelectedId={setSelectedId}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>
              {filteredAnimals?.map((item, index) => (
                <div key={index} className={styles.is_loading}>
                  <h6></h6>
                  <h2></h2>
                  <h4></h4>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
