import { TestBed } from '@angular/core/testing';

import { TodoService } from './nombre-servicio.service';

describe('NombreServicioService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
