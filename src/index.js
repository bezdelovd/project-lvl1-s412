import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countRounds = 3;

const engineGame = (description, game) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < countRounds; i += 1) {
    const dataGame = game();
    const question = car(dataGame);
    const correctAnswer = cdr(dataGame);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let"s try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engineGame;
