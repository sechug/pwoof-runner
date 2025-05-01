import React from 'react';
import GameCanvas from '../components/GameCanvas';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Pwoof Runner</h1>
      <p className="text-lg mb-8">An interactive educational platform proof verifier.</p>
      <GameCanvas />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Leaderboard</h2>
        {/* Leaderboard component or data will go here */}
      </div>
    </div>
  );
};

export default Home;