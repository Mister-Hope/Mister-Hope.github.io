const fs = require("fs");

const content = JSON.parse(
  fs.readFileSync("./script/comsol/words.json", { encoding: "utf-8" })
);

const { lines } = content.captions[0].hash;

let result = "";

lines.forEach((line) => {
  line.text.forEach((x) => {
    result += `${x}。`;
  });
});

fs.writeFileSync("./script/comsol/words.md", result);
