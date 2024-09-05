'use client'
import { useEffect, useState } from 'react';
import { fetchJoke } from '../api/joke/jokeService';

export const Main =() =>{
  const [joke, setJoke] = useState('');
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    async function getJokeForComponent() {
      try {
        const result = await fetchJoke();
        setJoke(result.quote);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('An unknown error occurred');
        }
      }
    }

    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitors'); 
        const data = await response.json();
        setVisitCount(data.count); 
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    getJokeForComponent();
    fetchVisitorCount();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Chuck Norris</h1>
      <p className="mt-4">{joke}</p>
      <p className="mt-4">Количество посетителей: {visitCount}</p>
    </div>
  );
}