import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DangkiController } from './dangki.controller.js';
import { DangkiService } from './dangki.service.js';
import { Sinhvien } from '../entities/sinhvien.entity.js';
import { Monhoc } from '../entities/monhoc.entity.js';
import { Dangki } from '../entities/dangki.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Sinhvien, Monhoc, Dangki])],
  controllers: [DangkiController],
  providers: [DangkiService]
})
export class DangkiModule {}