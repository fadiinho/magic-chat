import { useState } from 'react';
import { useSocket } from '../hooks/useSocket';

export const UsernameSelector = () => {
  const { setUsername } = useSocket();
  const [value, setValue] = useState('');
  const handleSubmit = () => {
    if (!value) return;
    setUsername(value);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="p-1 mx-1  w-56 sm:w-72 sm:h-16 text-xl rounded border bg-primary"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" ? handleSubmit() : undefined}
        onSubmit={handleSubmit}
        placeholder="Nome de usuário"
      />
      <button
        className="p-1 m-1 w-1/2 rounded border bg-primary active:bg-purple-600 hover:bg-purple-700"
        onClick={handleSubmit}
      >Continuar</button>
    </div>
  )
}
