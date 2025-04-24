import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  name: process.env.TYPEORM_NAME,
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  ssl: true,
  entities: [String(process.env.TYPEORM_ENTITY)],
  migrations: [String(process.env.TYPEORM_MIGRATIONS)]
});

export default AppDataSource;