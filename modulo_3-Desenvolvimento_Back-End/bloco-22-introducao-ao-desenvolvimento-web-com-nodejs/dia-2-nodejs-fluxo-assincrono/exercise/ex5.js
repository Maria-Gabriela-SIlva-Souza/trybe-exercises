const fs = require('fs').promises;

const arrayToFile = async () => {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = array.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  console.log('Arquivos criados')

  await Promise.all(createFilePromises)

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8')
  ))

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent)

  console.log('Arquivo concatenado')
}

arrayToFile();