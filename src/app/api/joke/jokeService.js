import axios from 'axios';

export async function fetchJoke() {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random?category=dev');
    const quote = response.data.value;
    return { quote };
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw new Error('Failed to fetch joke');
  }
}