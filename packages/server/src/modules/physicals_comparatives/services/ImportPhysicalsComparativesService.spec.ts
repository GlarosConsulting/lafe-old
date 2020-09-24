import path from 'path';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import AppError from '@shared/errors/AppError';

import FakePhysicalComparativeGroupingsRepository from '@modules/physicals_comparatives/repositories/fakes/FakePhysicalComparativeGroupingsRepository';
import FakePhysicalComparativeHeadersRepository from '@modules/physicals_comparatives/repositories/fakes/FakePhysicalComparativeHeadersRepository';
import FakePhysicalComparativeItemsRepository from '@modules/physicals_comparatives/repositories/fakes/FakePhysicalComparativeItemsRepository';

import ImportPhysicalsComparativesService from './ImportPhysicalsComparativesService';

const TESTS_FILES_FOLDER = '__tests__';
const TESTS_IMPORT_FILENAME =
  'import-physical-comparative-service-spreadsheet.xlsx';
const TESTS_INVALID_IMPORT_FILENAME =
  'invalid-import-physical-comparative-service-spreadsheet.xlsx';

let fakePhysicalComparativeHeadersRepository: FakePhysicalComparativeHeadersRepository;
let fakePhysicalComparativeGroupingsRepository: FakePhysicalComparativeGroupingsRepository;
let fakePhysicalComparativeItemsRepository: FakePhysicalComparativeItemsRepository;
let fakeStorageProvider: FakeStorageProvider;
let importPhysicalsComparatives: ImportPhysicalsComparativesService;

describe('ImportPhysicalsComparatives', () => {
  beforeEach(() => {
    fakePhysicalComparativeHeadersRepository = new FakePhysicalComparativeHeadersRepository();
    fakePhysicalComparativeGroupingsRepository = new FakePhysicalComparativeGroupingsRepository();
    fakePhysicalComparativeItemsRepository = new FakePhysicalComparativeItemsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    importPhysicalsComparatives = new ImportPhysicalsComparativesService(
      fakePhysicalComparativeHeadersRepository,
      fakePhysicalComparativeGroupingsRepository,
      fakePhysicalComparativeItemsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to import physicals comparatives', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(__dirname, TESTS_FILES_FOLDER, TESTS_IMPORT_FILENAME);
    });

    const createAll = jest.spyOn(
      fakePhysicalComparativeItemsRepository,
      'createAll',
    );

    const response = await importPhysicalsComparatives.execute({
      importFilename: TESTS_IMPORT_FILENAME,
    });

    expect(createAll).toHaveBeenCalled();

    expect(response).toEqual({
      header: {
        id: expect.any(String),
        spreadsheet_name: TESTS_IMPORT_FILENAME,
        construction: expect.any(String),
        constructive_unity: expect.any(String),
        measurement: expect.any(String),
        construction_start_date: expect.any(Date),
        construction_end_date: expect.any(Date),
      },
      complements: expect.arrayContaining([
        expect.objectContaining({
          grouping: {
            id: expect.any(String),
            header_id: expect.any(String),
            title: expect.any(String),
            duration: expect.any(Number),
            start_date: expect.any(Date),
            end_date: expect.any(Date),
          },
          items: expect.arrayContaining([
            {
              id: expect.any(String),
              grouping_id: expect.any(String),
              description: expect.any(String),
              und: expect.any(String),
              duration: expect.any(Number),
              start_date: expect.any(Date),
              end_date: expect.any(Date),
              percentage_weight: expect.any(Number),
              status_in_days: expect.any(Number),
              quantities: expect.any(String),
              percentage: expect.any(String),
              advance_percentage: expect.any(String),
            },
          ]),
        }),
      ]),
    });
  });

  it('should not be able to import physicals comparatives with invalid import filename', async () => {
    await expect(
      importPhysicalsComparatives.execute({
        importFilename: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to import physicals comparatives with non-existing import file', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        'non-existing-file.any',
      );
    });

    await expect(
      importPhysicalsComparatives.execute({
        importFilename: 'non-existing-file.any',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to import physicals comparatives with a invalid spreadsheet', async () => {
    jest.spyOn(path, 'join').mockImplementationOnce(() => {
      return path.resolve(
        __dirname,
        TESTS_FILES_FOLDER,
        TESTS_INVALID_IMPORT_FILENAME,
      );
    });

    await expect(
      importPhysicalsComparatives.execute({
        importFilename: TESTS_INVALID_IMPORT_FILENAME,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
