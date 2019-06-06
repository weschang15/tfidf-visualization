const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const data = require("./data/unprocessed-anime-data.json");

async function go() {
  const { items } = data;
  const anime = items.map(item => ({
    title: item.anime_manga.__text,
    summary: item.plot_summary[0]
  }));

  const fileData = { anime };
  const file = await writeFile(
    "./data/processed-anime-data.json",
    JSON.stringify(fileData)
  );
  console.log(file);
}

go();
