import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
    >
      <input
        type='input'
        ref={inputRef}
        placeholder='Enter a task'
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        className='input__box'
      ></input>
      <button className='input_submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
