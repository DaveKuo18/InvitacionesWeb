import { readFile } from "node:fs/promises";

const filesToValidate = [
  "src/data/demos/index.js",
  "src/data/demo/users.js",
  "src/data/demo/rsvpResponses.js",
];

await Promise.all(filesToValidate.map((file) => readFile(file, "utf8")));

console.log("Datos demo listos. Este proyecto es frontend estatico: los fixtures viven en src/data/demos y src/data/demo.");
console.log("Usuario demo por defecto: demo / demo1234. Se puede cambiar con VITE_DEMO_USER_USERNAME y VITE_DEMO_USER_PASSWORD.");
