import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Monhoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maMonHoc: string;

  @Column()
  tenMonHoc: string;

  @OneToMany('Dangki', (dangki: any) => dangki.monhoc)
  cacDangKi: any[];
}