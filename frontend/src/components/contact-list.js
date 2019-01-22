import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {ContactUpdated, ContactViewed} from './message';
import {inject} from 'aurelia-framework';

@inject(WebAPI, EventAggregator)
export class ContactList {
  constructor(api, ea) {
    this.api = api;
    this.contacts = [];
    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id === id);
      Object.assign(found, msg.contact);
    });
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    return this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  created() {
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  delete(id) {
    this.api.deleteContact(id);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }
}
