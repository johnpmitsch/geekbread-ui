import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let recipes = [
      { id: 11, name: 'Rustic Sourdough' },
      { id: 12, name: 'Whole Wheat' },
      { id: 13, name: 'Pan loaf' }
    ];
    return {recipes};
  }
}
