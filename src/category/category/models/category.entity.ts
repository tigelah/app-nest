import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';


@Entity()
export class Category{
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id: string;

    @Column()
    name: string;
}