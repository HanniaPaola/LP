import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLibrosComponent } from './card-libros.component';

describe('CardLibrosComponent', () => {
  let component: CardLibrosComponent;
  let fixture: ComponentFixture<CardLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
