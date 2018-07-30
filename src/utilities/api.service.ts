import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

const { api } = environment;

@Injectable({ providedIn: 'root' })
export class ApiService {
  awesomes = `${api}/awesomes`;
}
