import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {ContactUpdated, ContactViewed} from './message';
import {areEqual} from './utility';
import { Router } from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(WebAPI, EventAggregator, Router)
export class ContactDetail {
  constructor(api, ea, router) {
    this.api = api;
    this.ea = ea;
    this.router = router;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    return this.api.getContactDetails(params.id).then(contact => {
      this.contact = contact[0];
      this.routeConfig.navModel.setTitle(contact[0].firstName);
      this.originalContact = JSON.parse(JSON.stringify(contact[0]));
      this.ea.publish(new ContactViewed(this.contact));
    });
  }

  get canSave() {
    return this.contact.firstName && this.contact.lastName;
  }

  save() {
    this.api.saveContact(this.contact, this.contact.id).then(contact => {
      this.contact = contact[0];
      this.routeConfig.navModel.setTitle(contact[0].firstName);
      this.originalContact = JSON.parse(JSON.stringify(contact[0]));
      this.ea.publish(new ContactUpdated(this.contact));
    });
    this.router.navigateToRoute('home');
  }

  delete() {
    this.api.deleteContact(this.contact.id);
    this.router.navigateToRoute('home');
  }

  canDeactivate() {
    if (!areEqual(this.originalContact, this.contact)) {
      let result = confirm('You have unsaved changes. Are you sure you wish to leave?');

      if (!result) {
        this.ea.publish(new ContactViewed(this.contact));
      }

      return result;
    }

    return true;
  }
}

