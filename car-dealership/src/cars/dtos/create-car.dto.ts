import { IsString, MinLength } from "class-validator";

export class CreateCarDTO {
    @IsString({message: `Brand must be a good string`})
    readonly brand: string;
    @IsString()
    @MinLength(3)
    readonly model:string;
}