import Link from 'next/link';
import React, { useState } from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      
      <Link href="/"><a>Home</a></Link>
    </div>
  );
}

export default About;