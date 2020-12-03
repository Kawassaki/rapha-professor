import React, { useState } from 'react';

const Tempo: React.FC<{staticDateString: string}> = ({staticDateString}) => {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div>
      <h1>{dynamicDateString} (dinâmico)</h1>
      <h1>{staticDateString} (dinâmico)</h1>
    </div>
  );
}

export const getStaticProps = () => {
  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return {
    props: {
      staticDateString
    }
  };
}

export default Tempo;