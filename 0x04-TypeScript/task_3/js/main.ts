/// <reference path="./crud.d.ts" />
/// <reference path="./interface.ts" />

// Import types from interface.ts
import { RowID, RowElement } from "./interface";

// Import everything from crud.js as CRUD
import * as CRUD from "crud";

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Call insertRow and store the result in const variable newRowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`// Insert row ${JSON.stringify(row)}`);
console.log(`const obj = ${JSON.stringify(row)}`);
console.log(`CRUD.insertRow(obj);`);

// Create a const variable named updatedRow with the type RowElement
const updatedRow: RowElement = { ...row, age: 23 };

// Call updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);
console.log(`CRUD.updateRow(newRowID, updatedRow);`);

CRUD.deleteRow(newRowID);
console.log(`// Delete row id ${newRowID}`);
console.log(`CRUD.deleteRow(${newRowID});`);
