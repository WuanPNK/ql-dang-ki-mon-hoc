import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DangkiModule } from './dangki/dangki.module.js';
import { Sinhvien } from './entities/sinhvien.entity.js';
import { Monhoc } from './entities/monhoc.entity.js';
import { Dangki } from './entities/dangki.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'ql_sinhvien',
      entities: [Sinhvien, Monhoc, Dangki],
      synchronize: true,
    }),
    DangkiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}