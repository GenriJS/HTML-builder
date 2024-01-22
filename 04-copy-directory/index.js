// i think it should be less complicated, but it was my first idea and i dont have time for another 
//modules
const fs = require('fs');
const path = require('path');

//const
const folderPath = path.join(__dirname, 'files');
const newFolderPath = path.join(__dirname, 'files-copy');

//start 
copyDir();

//function body
function copyDir() {
  // create new folder 
  fs.mkdir(newFolderPath, (err) => {
    if (err) {
      console.log('Папка уже существует, включаю перезапись');
      fs.rm(newFolderPath, { recursive: true }, (err) => {  //delete old folder
        if (err) {
          console.log('Ошибка при удалении папки');
          return
        }
        fs.mkdir(newFolderPath, { recursive: true }, (err) => {  //create new folder again  
          if (err) {
            console.log('Ошибка при создании новой папки');
            return;
          }
          copyEachFile();
        });
      });
    } 
  });  
  //read directory
  copyEachFile();
}

//function for copy files
function copyEachFile() {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log('Ошибка при чтении папки');
      return;
    }
    // take each file
    files.forEach(file => {
      const filePath = path.join(__dirname, 'files', file);
      const newFolderFile = path.join(newFolderPath, file);
      // copy each file and put it in new folder
      fs.copyFile(filePath, newFolderFile, (err) => {
        if (err) {
          console.log('Ошибка при копировании файла');
          return;
        } 
      });
    });
  });
}
