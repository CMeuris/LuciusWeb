/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';

import { CompoundComponent } from './compound.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { KnownTargetsComponent } from '../known-targets/known-targets.component';
import { SimilarityChartsComponent } from '../similarity-charts/similarity-charts.component';
import { TopCompoundsComponent } from '../top-compounds/top-compounds.component';
import { CompoundDataService } from '../../services';
import { reducer } from '../../reducers';

let comp: CompoundComponent;
let fixture: ComponentFixture<CompoundComponent>;
let el: DebugElement;

describe('CompoundComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          StoreModule.provideStore(reducer),
          HttpModule
        ],
        providers: [
          CompoundDataService
        ],
        declarations: [
          CompoundComponent,
          ToolbarComponent
        ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CompoundComponent);
        comp = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it('should create component', async(() => {
    expect(comp).toBeTruthy();
  }));

  it('toolbar type should be compound', async(() => {
    let toolbar = el.query(By.css('app-toolbar'));
    expect(toolbar.attributes['type']).toBe('compound');
  }));

});
