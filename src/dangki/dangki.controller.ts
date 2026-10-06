import { Controller, Post, Get, Body } from '@nestjs/common';
import { DangkiService } from './dangki.service.js';

@Controller('dangki')
export class DangkiController {
  constructor(private readonly dangkiService: DangkiService) {}

  // Câu 3.3: Tạo đăng ký
  @Post()
  taoDangKi(@Body() body: { sinhvienId: number; monhocId: number }) {
    return this.dangkiService.dangKiMonHoc(body.sinhvienId, body.monhocId);
  }

  // Câu 3.4: Lấy danh sách
  @Get()
  layDanhSach() {
    return this.dangkiService.layDanhSach();
  }
}