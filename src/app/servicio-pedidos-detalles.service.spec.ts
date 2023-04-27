import { TestBed } from '@angular/core/testing';

import { ServicioPedidosDetallesService } from './servicio-pedidos-detalles.service';

describe('ServicioPedidosDetallesService', () => {
  let service: ServicioPedidosDetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPedidosDetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
