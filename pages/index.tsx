import Link from 'next/link';
import React, { useState } from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about"><a>About</a></Link>
    </div>
  );
}

export default Home;