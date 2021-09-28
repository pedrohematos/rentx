import csvParse from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadAndSaveCategories(file: Express.Multer.File): Promise<void> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;

          const existsCategory = this.categoriesRepository.findByName(name);

          if (!existsCategory) {
            this.categoriesRepository.create({
              name,
              description,
            });
          }
        })
        .on("end", () => {
          resolve();
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    await this.loadAndSaveCategories(file);
  }
}

export { ImportCategoryUseCase };
