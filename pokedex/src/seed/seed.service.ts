import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';

@Injectable()
export class SeedService {
  constructor(private readonly pokemonService: PokemonService) { }
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=100');
    let newPoke: CreatePokemonDto= new CreatePokemonDto();
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      // console.log({ name, no });
      newPoke.name = name;
      newPoke.no = no;
      this.pokemonService.create(newPoke);
    })
    return data.results;
  }

}
