import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dtos/create-car.dto';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civid'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]
    public findAll() {
        return this.cars;
    }

    public findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car)
            throw new NotFoundException(`Car with id '${id}' not found`);
        return car;
    }

    public create(createCarDto: CreateCarDTO) {
        const car: Car = {
            id: uuid(),
            //brand: createCarDto.brand,
            //model: createCarDto.model,
            ...createCarDto
        };
        this.cars.push(car);
        return car;
    }

    public update(id: string, updateCarDto: UpdateCarDTO) {
        let carDB = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`Car id is not valid inside body`);

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    public delete(id:string){
        const carDB = this.findOneById(id);
        this.cars = this.cars.filter(car=> car.id !==id);
    }

}
