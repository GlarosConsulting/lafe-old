import path from 'path';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import AppError from '@shared/errors/AppError';

import FakeBricklayerExpenseItemsRepository from '@modules/expenses/repositories/fakes/FakeBricklayerExpenseItemsRepository';
import FakeExpenseItemsRepository from '@modules/expenses/repositories/fakes/FakeExpenseItemsRepository';
import FakeServantExpenseItemsRepository from '@modules/expenses/repositories/fakes/FakeServantExpenseItemsRepository';

import ImportExpensesService from './ImportExpensesService';

const TESTS_FILES_FOLDER = '__tests__';
const TESTS_IMPORT_FILENAME = 'import-expenses-service-spreadsheet.xlsx';
const TESTS_INVALID_IMPORT_FILENAME = [
  'invalid-import-expenses-service-spreadsheet-1.xlsx',
  'invalid-import-expenses-service-spreadsheet-2.xlsx',
  'invalid-import-expenses-service-spreadsheet-3.xlsx',
];

let fakeExpenseItemsRepository: FakeExpenseItemsRepository;
let fakeServantExpenseItemsRepository: FakeServantExpenseItemsRepository;
let fakeBricklayerExpenseItemsRepository: FakeBricklayerExpenseItemsRepository;
let fakeStorageProvider: FakeStorageProvider;
let importExpenses: ImportExpensesService;

describe('ImportExpenses', () => {
  beforeEach(() => {
    fakeExpenseItemsRepository = new FakeExpenseItemsRepository();
    fakeServantExpenseItemsRepository = new FakeServantExpenseItemsRepository();
    fakeBricklayerExpenseItemsRepository = new FakeBricklayerExpenseItemsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    importExpenses = new ImportExpensesService(
      fakeExpenseItemsRepository,
      fakeServantExpenseItemsRepository,
      fakeBricklayerExpenseItemsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to import expenses', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(__dirname, TESTS_FILES_FOLDER, TESTS_IMPORT_FILENAME);
    });

    const createAll = jest.spyOn(fakeExpenseItemsRepository, 'createAll');

    const response = await importExpenses.execute({
      importFilename: TESTS_IMPORT_FILENAME,
    });

    expect(createAll).toHaveBeenCalled();

    expect(response).toEqual({
      items: expect.arrayContaining([
        {
          id: expect.any(String),
          spreadsheet_name: expect.any(String),
          collaborator: expect.any(String),
          role: expect.any(String),
          value: expect.any(Number),
          percentage: expect.any(Number),
          appropriation: expect.any(String),
        },
      ]),
      servants: expect.arrayContaining([
        {
          id: expect.any(String),
          spreadsheet_name: expect.any(String),
          appropriation: expect.any(String),
          month_value: expect.any(Number),
          accumulated: expect.any(Number),
        },
      ]),
      bricklayers: expect.arrayContaining([
        {
          id: expect.any(String),
          spreadsheet_name: expect.any(String),
          appropriation: expect.any(String),
          month_value: expect.any(Number),
          accumulated: expect.any(Number),
        },
      ]),
    });
  });

  it('should be able to import expenses with some undefined spreadsheet value', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        TESTS_INVALID_IMPORT_FILENAME[2],
      );
    });

    const createAll = jest.spyOn(fakeExpenseItemsRepository, 'createAll');

    const response = await importExpenses.execute({
      importFilename: TESTS_IMPORT_FILENAME,
    });

    expect(createAll).toHaveBeenCalled();

    expect(response).toEqual(
      expect.objectContaining({
        items: expect.arrayContaining([
          {
            id: expect.any(String),
            spreadsheet_name: expect.any(String),
            collaborator: expect.any(String),
            role: expect.anything(),
            value: expect.any(Number),
            percentage: expect.any(Number),
            appropriation: expect.any(String),
          },
        ]),
      }),
    );
  });

  it('should not be able to import expenses with invalid import filename', async () => {
    await expect(
      importExpenses.execute({
        importFilename: '',
        worksheetId: 3,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to import expenses with non-existing import file', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        'non-existing-file.any',
      );
    });

    await expect(
      importExpenses.execute({
        importFilename: 'non-existing-file.any',
        worksheetId: 3,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to import expenses with less than 3 worksheets', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        TESTS_INVALID_IMPORT_FILENAME[0],
      );
    });

    await expect(
      importExpenses.execute({
        importFilename: TESTS_INVALID_IMPORT_FILENAME[0],
        worksheetId: 3,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to import expenses with a invalid spreadsheet', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        TESTS_INVALID_IMPORT_FILENAME[1],
      );
    });

    await expect(
      importExpenses.execute({
        importFilename: TESTS_INVALID_IMPORT_FILENAME[1],
        worksheetId: 3,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
