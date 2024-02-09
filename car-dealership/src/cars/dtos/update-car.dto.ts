import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDTO {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsOptional()
    @IsString({message: `Brand must be a good string`})
    readonly brand?: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    readonly model?:string;
}