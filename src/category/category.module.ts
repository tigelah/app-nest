import { Category } from './category/models/category.entity';
import { Module } from '@nestjs/common';
import { CategoryService } from './category/services/category.service';
import { CategoryController } from './category/controllers/category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [
    TypeOrmModule.forFeature([Category]),
  ],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
