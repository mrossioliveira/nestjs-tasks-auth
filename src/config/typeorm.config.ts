import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.AUTH_DB_HOSTNAME || '127.0.0.1',
  port: parseInt(process.env.AUTH_DB_PORT, 10) || 5432,
  username: process.env.AUTH_DB_USERNAME || 'tasks_auth',
  password: process.env.AUTH_DB_PASSWORD || 'password',
  database: process.env.AUTH_DB_NAME || 'tasks_auth',
  synchronize: !!process.env.TYPEORM_SYNC || true,
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  logging: 'all',
};
