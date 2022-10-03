import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig .DATABASE_HOST = process.env.DATABASE_HOST ? process.env.DATABASE_HOST : this.envConfig .DATABASE_HOST;
    process.env = {...this.envConfig}
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
