import type { Profile } from '@/types/profile.interface';

const fetchProfiles = async (count: number): Promise<Profile[]> => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await response.json();
    return data.results.map((result: any) => result as Profile);
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchProfiles;