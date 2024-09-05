'use client'
import { useEffect, useState } from 'react';

export const Main =() =>{
  const [joke, setJoke] = useState('');
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      const res = await fetch('/api/joke');
      const data = await res.json();
      setJoke(data.quote);
    };

    const fetchVisitorCount = async () => {
      const res = await fetch('/api/visitors');
      const data = await res.json();
      setVisitCount(data.count);
    };

    fetchJoke();
    fetchVisitorCount();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Случайная цитата Chuck Norris</h1>
      <p className="mt-4">{joke}</p>
      <p className="mt-4">Количество посетителей: {visitCount}</p>
    </div>
  );
}