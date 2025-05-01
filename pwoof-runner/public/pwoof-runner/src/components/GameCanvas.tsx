import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import PwoofScene from '../utils/phaserConfig';

const GameCanvas: React.FC = () => {
    const gameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: PwoofScene,
            parent: gameRef.current!,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false
                }
            }
        };

        const game = new Phaser.Game(config);

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameRef} />;
};

export default GameCanvas;