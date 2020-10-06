import path from 'path';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import AppError from '@shared/errors/AppError';

import FakeStockItemsRepository from '@modules/stock/repositories/fakes/FakeStockItemsRepository';

import ImportStockService from './ImportStockService';

const TESTS_FILES_FOLDER = '__tests__';
const TESTS_IMPORT_FILENAME = 'import-stock-service-spreadsheet.xlsx';
const TESTS_INVALID_IMPORT_FILENAME = [
  'invalid-import-stock-service-spreadsheet-1.xlsx',
  'invalid-import-stock-service-spreadsheet-2.xlsx',
  'invalid-import-stock-service-spreadsheet-3.xlsx',
];

let fakeStockItemsRepository: FakeStockItemsRepository;
let fakeStorageProvider: FakeStorageProvider;
let importStock: ImportStockService;

describe('ImportStock', () => {
  beforeEach(() => {
    fakeStockItemsRepository = new FakeStockItemsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    importStock = new ImportStockService(
      fakeStockItemsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to import stock', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(__dirname, TESTS_FILES_FOLDER, TESTS_IMPORT_FILENAME);
    });

    const createAll = jest.spyOn(fakeStockItemsRepository, 'createAll');

    const response = await importStock.execute({
      importFilename: TESTS_IMPORT_FILENAME,
    });

    expect(createAll).toHaveBeenCalled();

    expect(response).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(String),
          spreadsheet_name: expect.any(String),
          material: expect.any(String),
          unit: expect.any(String),
          appropriate_amount: expect.any(Number),
          average_value: expect.any(Number),
          total_value: expect.any(Number),
        },
      ]),
    );
  });

  it('should be able to import stock with some undefined spreadsheet value', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        TESTS_INVALID_IMPORT_FILENAME[2],
      );
    });

    const createAll = jest.spyOn(fakeStockItemsRepository, 'createAll');

    const response = await importStock.execute({
      importFilename: TESTS_IMPORT_FILENAME,
    });

    expect(createAll).toHaveBeenCalled();

    expect(response).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(String),
          spreadsheet_name: expect.any(String),
          material: expect.any(String),
          unit: expect.any(String),
          appropriate_amount: expect.any(Number),
          average_value: expect.any(Number),
          total_value: expect.any(Number),
        },
      ]),
    );
  });

  it('should not be able to import stock with invalid import filename', async () => {
    await expect(
      importStock.execute({
        importFilename: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to import stock with non-existing import file', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        'non-existing-file.any',
      );
    });

    await expect(
      importStock.execute({
        importFilename: 'non-existing-file.any',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to import stock with a invalid spreadsheet', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        TESTS_INVALID_IMPORT_FILENAME[1],
      );
    });

    await expect(
      importStock.execute({
        importFilename: TESTS_INVALID_IMPORT_FILENAME[1],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
