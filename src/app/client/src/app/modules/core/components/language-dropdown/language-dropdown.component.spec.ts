
import {of as observableOf,  Observable } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule, ResourceService, ConfigService } from '@sunbird/shared';
import { CoreModule, OrgDetailsService, ContentService, PublicDataService } from '@sunbird/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LanguageDropdownComponent } from './language-dropdown.component';
import { Response } from './language-dropdown.component.spec.data';


describe('LanguageDropdownComponent', () => {
  let component: LanguageDropdownComponent;
  let fixture: ComponentFixture<LanguageDropdownComponent>;
  const resourceBundle = {
    'messages': {
      'stmsg': {
        'm0007': 'Search for something else',
        'm0006': 'No result'
      },
      'fmsg': {
        'm0077': 'Fetching search result failed',
        'm0051': 'Fetching other courses failed, please try again later...'
      }
    }
  };
  const mockQueryParma = {
    'query': 'hello'
  };
  class RouterStub {
    navigate = jasmine.createSpy('navigate');
  }
  const fakeActivatedRoute = {
    'queryParams': observableOf({ language: 'en' }),
    snapshot: {
      params: {
        slug: 'ap'
      }
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule.forRoot(), CoreModule.forRoot()],
      providers: [ConfigService, OrgDetailsService,
        { provide: ResourceService, useValue: resourceBundle },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDropdownComponent);
    component = fixture.componentInstance;
  });

  it('On language change', () => {
    const router = TestBed.get(Router);
    component.redirectUrl = 'explore/1';
    component.queryParam = { 'language': 'en' };
    component.onLanguageChange('en');
    expect(router.navigate).toHaveBeenCalledWith([component.redirectUrl], { queryParams: component.queryParam });
  });

  it('On getting channel id', () => {
    const orgDetailsService = TestBed.get(OrgDetailsService);
    const publicDataService = TestBed.get(PublicDataService);
    spyOn(publicDataService, 'post').and.callFake(() => observableOf(Response.orgResponse));
    component.orgDetailsService.getOrgDetails('ap').subscribe((data) => {
    });
    fixture.detectChanges();
    expect(component.channelId).toBe('0123166374296453124');
  });

  it('should unsubscribe from all observable subscriptions', () => {
    component.ngOnInit();
    spyOn(component.unsubscribe, 'complete');
    component.ngOnDestroy();
    expect(component.unsubscribe.complete).toHaveBeenCalled();
  });
});

