import Image from 'next/image';
import styles from '../styles/results.module.css';
import SearchInput from './SearchInput';
import { useEffect, useState } from 'react';
import { generateFakeAnimals } from '@/fakeData/generateFakeData';
import useAnimalStore from '@/stores/useAnimalsStore';
import Link from 'next/link';

function HeaderResults() {
  const [search, setSearch] = useState('');
  const { setIsLoading } = useAnimalStore();
  const setAnimals = useAnimalStore((state) => state.setAnimals);

  useEffect(() => {
    const length = 10;
    const trimmedSearch = search.trim();

    const handleKeyDown = (e: any) => {
      if (e.key === 'Enter' && trimmedSearch) {
        setIsLoading(true);

        const generatedAnimals = generateFakeAnimals(length, trimmedSearch);
        setAnimals(generatedAnimals);

        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      }
    };

    const inputElement = document.getElementById('search-input');
    if (inputElement) {
      inputElement.addEventListener('keypress', handleKeyDown);

      return () => {
        inputElement.removeEventListener('keypress', handleKeyDown);
      };
    }
  }, [search, setAnimals, setIsLoading]);

  const handleToClean = () => {
    setSearch('');
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.header_box_left}>
        <div className={styles.center}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/google-logo.png"
              alt="google-logo"
              width={120}
              height={40}
              priority
            />
          </Link>
          <SearchInput
            id="search-input"
            type="text"
            name='search'
            maxLength={40}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            hasCharacters={search.trim() ? true : false}
            toClean={handleToClean}
          />
        </div>
      </div>
      <div className={styles.header_box_right}>
        <Image
          src="/dots.png"
          alt="dots"
          className={styles.avatar}
          width={20}
          height={20}
        />
        <Image
          src="/avatar.jpg"
          alt="avatar"
          className={styles.avatar}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}

export default HeaderResults;
