import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
    const host = this.configService.get('MONGO_HOST');
    const dbName = this.configService.get('MONGO_DB_NAME');
    const uri = `mongodb://${host}/${dbName}`;

    return {
      uri,
    };
  }
}
