//modules
const fs = require('fs').promises;  
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

//const
const rl = readline.createInterface({ input, output });
const filePath = path.join(__dirname, 'text.txt');

//turn on
console.log('Программа для ввода текста');
fs.writeFile(filePath, '', 'utf-8')
console.log('Файл успешно создан');
fillFile();

// function body
function fillFile() {
  rl.question('Введите текст (для выхода введите "exit" или нажмите Ctrl + C): ', async (answer) => {
    if (answer.toLowerCase() === 'exit') {
      rl.close();
    } else {
      await fs.appendFile(filePath, answer + '\n', 'utf-8');
      console.log('Текст успешно добавлен в файл.');
      fillFile();
    }
  });
}

// turn off
rl.on('close', function () {
  console.log('Программа завершена');
  process.exit(0);
});

process.on('SIGINT', function () {
  console.log('Программа завершена');
  process.exit(0);
});
