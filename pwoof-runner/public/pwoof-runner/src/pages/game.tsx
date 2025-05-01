import React from 'react';
import GameCanvas from '../components/GameCanvas';

const GamePage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <GameCanvas />
        </div>
    );
};

export default GamePage;