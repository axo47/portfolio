import { RevealDirective } from './reveal.directive';
import { ElementRef, Renderer2,PLATFORM_ID } from '@angular/core';

describe('RevealDirective', () => {
  let elementRefMock: ElementRef;
  let rendererMock: Renderer2;
  let platformIdMock: Object;

  beforeEach(() => {
    // Création de mocks pour les dépendances
    elementRefMock = { nativeElement: document.createElement('div') };
    rendererMock = {
      addClass: jest.fn(),
      removeClass: jest.fn(),
      setAttribute: jest.fn(),
    } as any; // Utilisation de `as any` pour simplifier le mock


    platformIdMock = 'browser'
  });


  it('should create an instance', () => {
    const directive = new RevealDirective(elementRefMock, rendererMock,platformIdMock);
    expect(directive).toBeTruthy();
  });
});