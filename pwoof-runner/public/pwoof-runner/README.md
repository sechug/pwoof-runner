# pwoof-runner
Interactive educational platform proof verifier.

## Getting Started

This project is a Next.js application that integrates Tailwind CSS for styling and Phaser.js for game development. It serves as an educational platform where users can interact with various proofs through a game interface.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd pwoof-runner
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- **src/pages**: Contains the main pages of the application.
  - **_app.tsx**: Custom App component for initializing global styles.
  - **index.tsx**: Main entry point of the application.
  - **game.tsx**: Dedicated page for the game.

- **src/components**: Contains reusable components.
  - **GameCanvas.tsx**: Manages the Phaser game instance.

- **src/styles**: Contains CSS files.
  - **globals.css**: Global styles for the application.
  - **tailwind.css**: Tailwind CSS styles.

- **src/utils**: Contains utility files.
  - **phaserConfig.ts**: Configuration settings for the Phaser game.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Phaser.js**: A fast, robust game framework for building HTML5 games.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.