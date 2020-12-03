import Link from 'next/link';
import React, { useState } from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Lo linda e perfect</h1>
      <Link href="/about"><a>About</a></Link>
    </div>
  );
}

export default Home;