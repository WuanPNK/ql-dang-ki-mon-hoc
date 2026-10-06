import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dangki } from '../entities/dangki.entity.js';
import { Sinhvien } from '../entities/sinhvien.entity.js';
import { Monhoc } from '../entities/monhoc.entity.js';

@Injectable()
export class DangkiService {
  constructor(
    @InjectRepository(Dangki) private dangkiRepo: Repository<Dangki>,
    @InjectRepository(Sinhvien) private sinhvienRepo: Repository<Sinhvien>,
    @InjectRepository(Monhoc) private monhocRepo: Repository<Monhoc>,
  ) {}

  async dangKiMonHoc(sinhvienId: number, monhocId: number) {
    const sinhvien = await this.sinhvienRepo.findOneBy({ id: sinhvienId });
    const monhoc = await this.monhocRepo.findOneBy({ id: monhocId });

    if (!sinhvien || !monhoc) {
      throw new NotFoundException('Không tìm thấy Sinh viên hoặc Môn học');
    }

    const dangKi = this.dangkiRepo.create({ sinhvien, monhoc });
    return await this.dangkiRepo.save(dangKi);
  }

  async layDanhSach() {
    return await this.dangkiRepo.find({
      relations: {
        sinhvien: true,
        monhoc: true,
      },
    });
  }
}