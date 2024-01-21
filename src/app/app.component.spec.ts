import { TestBed } from '@angular/core/testing';
import { SquareComponent } from './app.component';

describe('SquareComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SquareComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'TicTacToeApp' title`, () => {
    const fixture = TestBed.createComponent(SquareComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TicTacToeApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SquareComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, TicTacToeApp');
  });
});
