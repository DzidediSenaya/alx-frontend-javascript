/// <reference path="./interface.ts" />

// Import types from interface.ts
import { RowID, RowElement } from "./interface";

// Declare type declarations for crud.js functions
declare module "crud" {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
