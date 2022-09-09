import { Pipe, PipeTransform } from '@angular/core';
  
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(types: string): string {
  
    let color: string;
  
    switch (types) {
      case 'Feu':
        color = 'orange';
        break;
      case 'Eau':
        color = 'cyan';
        break;
      case 'Plante':
        color = 'light-green';
        break;
      case 'Insecte':
        color = 'lime lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'purple lighten-2';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'yellow';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
        case 'Sol':
          color = 'orange lighten-3';
          break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}