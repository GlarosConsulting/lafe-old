import path from 'path';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import AppError from '@shared/errors/AppError';

import FakeBillsRepository from '@modules/bills/repositories/fakes/FakeBillsRepository';

import ImportBillsService from './ImportBillsService';

const TESTS_FILES_FOLDER = '__tests__';
const TESTS_IMPORT_FILENAME = 'import-bills-service-spreadsheet.xlsx';

let fakeBillsRepository: FakeBillsRepository;
let fakeStorageProvider: FakeStorageProvider;
let importBills: ImportBillsService;

describe('ImportBills', () => {
  beforeEach(() => {
    fakeBillsRepository = new FakeBillsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    importBills = new ImportBillsService(
      fakeBillsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to import bills', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(__dirname, TESTS_FILES_FOLDER, TESTS_IMPORT_FILENAME);
    });

    const createAll = jest.spyOn(fakeBillsRepository, 'createAll');

    const bills = await importBills.execute({
      importFilename: TESTS_IMPORT_FILENAME,
    });

    expect(createAll).toHaveBeenCalledTimes(2);

    expect(bills).toContainEqual(
      expect.objectContaining({
        category: expect.any(String),
        spreadsheet_code: expect.any(String),
        fiscal_document: expect.any(String),
        service_description: expect.any(String),
        provider: expect.any(String),
        payment_date: expect.any(Date),
        value: expect.any(Number),
      }),
    );
  });

  it('should not be able to import bills with invalid import filename', async () => {
    await expect(
      importBills.execute({
        importFilename: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to import bills with non-existing import file', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        'non-existing-file.any',
      );
    });

    await expect(
      importBills.execute({
        importFilename: 'non-existing-file.any',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
