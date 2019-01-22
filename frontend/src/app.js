import {activationStrategy} from 'aurelia-router';


export class App {
  configureRouter(config, router) {
    config.title = 'AureliaApp';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {
        route: ['', 'home'],
        moduleId: PLATFORM.moduleName('components/no-selection'),
        name: 'home',
        title: 'Select',
        activationStrategy: activationStrategy.invokeLifecycle

      },
      {
        route: 'contacts/:id',
        moduleId: PLATFORM.moduleName('components/contact-detail'),
        name: 'contacts',
        activationStrategy: activationStrategy.invokeLifecycle

      },
      {
        route: 'add-user',
        moduleId: PLATFORM.moduleName('components/contact-ajout'),
        name: 'ajout',
        activationStrategy: activationStrategy.invokeLifecycle

      }

    ]);

    this.router = router;
  }
}

