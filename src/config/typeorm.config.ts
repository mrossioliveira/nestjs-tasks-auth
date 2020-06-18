import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.API_DB_HOSTNAME || '127.0.0.1',
  port: parseInt(process.env.API_DB_PORT, 10) || 5432,
  username: process.env.API_DB_USERNAME || 'task_dev',
  password: process.env.API_DB_PASSWORD || 'password',
  database: process.env.API_DB_NAME || 'task_dev',
  synchronize: !!process.env.TYPEORM_SYNC || false,
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  logging: 'all',
};
