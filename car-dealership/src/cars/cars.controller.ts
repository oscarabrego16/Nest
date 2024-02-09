import { Body, Controller, Delete, Get, Injectable, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import path from 'path';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dtos/create-car.dto';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {
    constructor(
        private readonly carsService: CarsService,
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get("/:id")
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        //console.log({id: id});
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() createCarInfo: CreateCarDTO) {
        return this.carsService.create(createCarInfo);
    }

    @Patch("/:id")
    updateCar(@Param('id', ParseUUIDPipe) id: string,
        @Body() updateCar: UpdateCarDTO) {
        return this.carsService.update(id, updateCar);
    }

    @Delete("/:id")
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    }


}
