const fs = require('fs');
const path = require('path');

const getAllFiles = function(dirPath,arrayOfFiles){
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      }
    else {
      console.log(file);
      arrayOfFiles.push(path.join(dirPath, file))
     }
  })
    return  arrayOfFiles;
}

const convertBytes = function(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]

  if (bytes == 0) {
    return "n/a"
  }

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

  if (i == 0) {
    return bytes + " " + sizes[i]
  }

  return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

const getContents = function(directoryPath) {
  let arrayOfFiles = [];
  let totalSize = 0,size=0;
  let temp = {};
  let ans = [];

  arrayOfFiles = getAllFiles(directoryPath)

  arrayOfFiles.forEach(function(filePath) {
    totalSize = fs.statSync(filePath).size

    size =  convertBytes(totalSize)

    temp ={
       "path" : filePath,
       "size" : size
     }

    ans.push(temp);
  })
  
    return ans;
}


const result = getContents("C:/Users/ShreyasDhanush/Desktop/New folder")
console.log(result);












