'use client';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchInput from '@/components/SearchInput';
import { useState } from 'react';
import { generateFakeAnimals } from '@/fakeData/generateFakeData';
import useAnimalStore from '@/stores/useAnimalsStore';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [search, setSearch] = useState('');
  const { setIsLoading } = useAnimalStore();
  const setAnimals = useAnimalStore((state) => state.setAnimals);
  const router = useRouter();
  const trimmedSearch = search.trim();

  const handleToClean = () => {
    setSearch('');
  };

  const handleSearch = () => {
    setIsLoading(true);
    router.push('/results');

    const length = 10;

    if (trimmedSearch) {
      const generatedAnimals = generateFakeAnimals(length, search);
      setAnimals(generatedAnimals);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && trimmedSearch) {
      handleSearch();
    }
  };

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/google-logo.png"
          alt="google-logo"
          width={300}
          height={120}
          priority
        />
        <SearchInput
          type="text"
          name="search"
          maxLength={40}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          hasCharacters={search.trim() ? true : false}
          toClean={handleToClean}
          onKeyDown={handleKeyDown}
        />
        <p
          onClick={handleSearch}
          className={
            !search.trim() ? styles.button_disabled : styles.button_activated
          }
        >
          Search
        </p>
      </div>
      <Footer />
    </main>
  );
}
