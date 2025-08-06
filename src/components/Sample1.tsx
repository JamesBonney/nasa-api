import type { FC } from 'react';

export const Sample1: FC = () => {
  const apiKey = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';
  const apiUrl = import.meta.env.VITE_NASA_API_URL || 'https://api.nasa.gov';
  console.log('Sample1');
  return (
    <>
      <div>Sample 1</div>
      <div>Sample 1</div>
      <div>Sample 1</div>
      <div>Sample 1</div>
      <div>Sample 1</div>
      <div>Sample 1</div>
      <div>
        <p>
          API Key {apiKey}
        </p>
        <p>
          API URL {apiUrl}
        </p>
      </div>
    </>
  );
};

export default Sample1;