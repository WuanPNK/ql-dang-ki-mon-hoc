import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Dangki {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Sinhvien', (sinhvien: any) => sinhvien.cacDangKi)
  sinhvien: any;

  @ManyToOne('Monhoc', (monhoc: any) => monhoc.cacDangKi)
  monhoc: any;

  @CreateDateColumn()
  ngayDangKi: Date;
}