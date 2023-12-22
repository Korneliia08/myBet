const {execSync} = require('child_process');
const exec = commands => {
    execSync(commands, {stdio: 'inherit', shell: true});
};
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter component name: ', (name) => {
    //zamiana pierwszej litery na dużą
    const firstLetter = name.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = name.slice(1)
    const capitalizeName = firstLetterCap + remainingLetters
    exec(`npx generate-react-cli component ${capitalizeName}`);
    rl.close();
});
