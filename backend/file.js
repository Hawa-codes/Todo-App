// const fs = require("node:fs/promises");
import fs from "node:fs/promises";

const readUsers = async () => {
    const data = await fs.readFile("./data/users.json", "utf-8");
    return JSON.parse(data).users;
}

const saveUsers = async (todos) => {
    await fs.writeFile("./data/users.json", JSON.stringify({ todos }, null, 2));
}

export { readUsers, saveUsers };