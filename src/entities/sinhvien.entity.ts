import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Sinhvien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maSinhVien: string;

  @Column()
  tenSinhVien: string;

  @OneToMany('Dangki', (dangki: any) => dangki.sinhvien)
  cacDangKi: any[];
}