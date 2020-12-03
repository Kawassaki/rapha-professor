import React, { useState } from 'react';

const Tempo: React.FC<{staticDateString: string}> = ({staticDateString}) => {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div>
      <h1>{dynamicDateString} (dinâmico)</h1>
      <h1>{staticDateString} (estático)</h1>
    </div>
  );
}



export const getStaticProps = async () => {
  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return {
    props: {
      staticDateString
    },
    revalidate: 1
  };
}

export default Tempo;