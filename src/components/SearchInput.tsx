import { ChangeEventHandler } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface InputProps {
  id?: string;
  placeholder?: string;
  type: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  hasCharacters: boolean;
  toClean: () => void;
  value: string;
  maxLength?: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<InputProps> = ({
  id,
  placeholder,
  type,
  name,
  onChange,
  hasCharacters,
  toClean,
  value,
  maxLength,
  onKeyDown,
}) => {
  return (
    <div>
      <AiOutlineSearch />
      <input
        id={id}
        maxLength={maxLength}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {hasCharacters && (
        <button className="button" type="button" onClick={toClean}>
          x
        </button>
      )}
    </div>
  );
};

export default SearchInput;
