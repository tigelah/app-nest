import { Category } from './../models/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ){}

    async  findAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async  create(category: Category): Promise<Category> {
        return await this.categoryRepository.save(category);
    }

    async update(category: Category): Promise<UpdateResult> {
        return await this.categoryRepository.update(category.id, category);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.categoryRepository.delete(id);
    }
}
