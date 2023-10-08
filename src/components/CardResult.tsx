import { Dispatch, SetStateAction } from 'react';
import styles from '../styles/card.module.css';

interface CardResultProps {
  image: string;
  title: string;
  description: string;
  setSelectedId: Dispatch<SetStateAction<string>>
}
const CardResult: React.FC<CardResultProps> = ({
  image,
  title,
  description,
  setSelectedId
}) => {
  return (
    <div className={styles.modal} onClick={() => setSelectedId('')}>
      <div className={styles.card}>
        <div
          style={{
            backgroundImage: `url(${image}`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: ' 180px',
            width: '100%',
          }}
        ></div>
        <div className={styles.information}>
          <p>{image}</p>
          <h4>{title}</h4>
          <h5>{description}</h5>
        </div>
      </div>
    </div>
  );
};

export default CardResult;
