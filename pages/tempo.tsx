import React, { useState } from 'react';

const Tempo: React.FC<{staticDateString: string}> = ({staticDateString}) => {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div>
      <h1>{dynamicDateString} (dinâmico)</h1>
      <h1>{staticDateString} (estático - com delay)</h1>
    </div>
  );
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getStaticProps = async () => {
  console.log('Add delay of 5 seconds');
  await delay(5000);

  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return {
    props: {
      staticDateString
    }
  };
}

export default Tempo;