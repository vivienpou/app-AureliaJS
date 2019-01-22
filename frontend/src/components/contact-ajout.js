import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import { Router } from 'aurelia-router';

@inject(WebAPI, EventAggregator, Router)
export class ContactAjout {
  constructor(api, ea, router) {
    this.api = api;
    this.ea = ea;
    this.router = router;
  }

  create() {
    this.api.createContact(this.contact).then(contact => {
      this.contact = contact[0];
      this.routeConfig.navModel.setTitle('ajout');
    });
    this.router.navigateToRoute('home');
  }
}

