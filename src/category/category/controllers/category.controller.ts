import { UserResponse } from './../../api-doc/user.response';
import { CategoryService } from './../services/category.service';
import { Category } from './../models/category.entity';
import { Controller, Get, Post,Put, Delete, Body, Param  } from '@nestjs/common';
import { ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';


@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @ApiOkResponse({
        type: UserResponse
    })
    @Get()
    index(): Promise<Category[]>{
        return this.categoryService.findAll();
    }

    @ApiCreatedResponse({
        type: UserResponse
    })
    @Post('create')
    async create(@Body() categoryData: Category): Promise<any> {
      return this.categoryService.create(categoryData);
    } 
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() categoryData: Category): Promise<any> {
        categoryData.id = String(id);
        console.log('Update #' + categoryData.id)
        return this.categoryService.update(categoryData);
    } 

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.categoryService.delete(id);
    }  
}
