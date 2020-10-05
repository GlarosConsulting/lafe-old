/* eslint-disable @typescript-eslint/naming-convention */
declare module 'read-excel-file/node' {
  import { PathLike } from 'fs';
  import { Stream } from 'stream';

  type BasicType =
    | typeof String
    | typeof Number
    | typeof Boolean
    | typeof Date
    | 'Integer'
    | 'URL'
    | 'Email';

  interface SchemaEntryBasic {
    prop: string;
    type: BasicType;
    oneOf?: T[];
    required?: boolean;
    validate?<T>(value: T): void;
  }

  interface SchemaEntryParsed {
    prop: string;
    parse<T>(value: string): T | null;
    oneOf?: T[];
    required?: boolean;
    validate?<T>(value: T): void;
  }

  // Implementing recursive types in TypeScript:
  // https://dev.to/busypeoples/notes-on-typescript-recursive-types-and-immutability-5ck1
  interface SchemaEntryRecursive {
    prop: string;
    type: Record<string, SchemaEntry>;
    required?: boolean;
  }

  type SchemaEntry =
    | SchemaEntryBasic
    | SchemaEntryParsed
    | SchemaEntryRecursive;

  export type Schema = Record<string, SchemaEntry>;

  type Cell = string | number | boolean | typeof Date;
  export type Row = Cell[];

  export interface SheetParsingOptions {
    sheet?: number | string;
    properties?: any;
    rowMap?: any;
    isColumnOriented?: boolean;
    transformData?(rows: Row[]): Row[];
  }

  export interface SheetConvertOptions extends SheetParsingOptions {
    schema: Record<string, SchemaEntry>;
  }

  export interface SheetNamesOptions {
    getSheets: boolean;
  }

  export type SheetOptions = SheetParsingOptions | SheetNamesOptions;

  export interface Error {
    error: string;
    row: number;
    column: number;
    value?: any;
    type?: SchemaEntry;
  }

  export interface ParsedResult<T> {
    rows: T[];
    errors: Error[];
  }

  function readXlsxFile<T = any>(
    input: Stream | PathLike,
    options?: SheetOptions,
  ): Promise<ParsedResult<T>>;
  function readXlsxFile<T = any>(
    input: Stream | PathLike,
    options: SheetConvertOptions,
  ): Promise<ParsedResult<T>>;

  export default readXlsxFile;
}
