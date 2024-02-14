import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDTO } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private _brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // }
  ]

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand ={
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime()
    }
    this._brands.push(brand);
    return brand;
  }

  findAll() {
    return this._brands;
  }

  findOne(id: string) {
    const brand = this._brands.find(brand => brand.id === id);
    if (!brand)
      throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDTO) {
    let brandDB = this.findOne(id);
    this._brands= this._brands.map(brand=>{
      if(brand.id === id){
        brandDB.updatedAt = new Date().getTime();
        brandDB = {...brandDB, ...updateBrandDto}
        return brandDB;
      }
      return brand;
    })
    return brandDB;
  }

  remove(id: string) {
    this.findOne(id);
    this._brands = this._brands.filter(brand=> brand.id !== id);
  }

  public fillCarsWithSeedData(brands:Brand[]){
    this._brands = brands;
}

}
