import {HttpClient, json} from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import 'promise-polyfill/src/polyfill';

let httpClient = new HttpClient();

httpClient.configure(config => {
  config
    .useStandardConfiguration()
    .withBaseUrl('/')
    .withDefaults({
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'Fetch'
      }
    });
});

@inject(httpClient, json)
export class WebAPI {
  getContactList() {
    return new Promise((resolve, reject)=> {
      const http = httpClient
        .fetch('http://localhost:3000/api')
        .then(res=>res.json())
        .catch(error => {
          alert(error);
        });
      resolve(http);
    });
  }

  getContactDetails(ids) {
    return new Promise((resolve, reject)=> {
      const http = httpClient
        .fetch(`http://localhost:3000/api/contacts/${ids}`, {
        })
        .then(result=>result.json())
        .catch(error => {
          alert(error);
        });
      resolve(http);
    });
  }

  saveContact(contact, id) {
    return new Promise((resolve, reject)=> {
      const http = httpClient
        .fetch(`http://localhost:3000/api/contacts/${id}`, {
          method: 'put',
          body: json(contact)
        })
        .then(response => response.json());
      resolve(http);
    });
  }

  deleteContact(id) {
    return new Promise((resolve, reject)=> {
      const http = httpClient
        .fetch(`http://localhost:3000/api/contacts/${id}`, {
          method: 'delete'
        })
        .then(res=>res.json());
      resolve(http);
    });
  }


  createContact(contact) {
    return new Promise((resolve, reject)=> {
      const http = httpClient
        .fetch('http://localhost:3000/api/contacts/', {
          method: 'post',
          body: json(contact)
        })
        .then(response => response.json());
      resolve(http);
    });
  }
}
