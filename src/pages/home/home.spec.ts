import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IonicModule, NavController } from 'ionic-angular';

import { HomePage } from './home';

describe('Home Page', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create component', () => expect(component).toBeDefined());

  it('should have a title of "Ionic Blank"', () => {
    const ionTitle = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(ionTitle.innerText).toMatch('Ionic Blank');
  });

});
