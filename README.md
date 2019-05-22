# Angular Loading Screen
A simple loading screen made with Angular (6, 7).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and deployment purposes.
Please note that this is not a module. The repository itself is a source code.

### Prerequisites
- This component depends on ngx-loading.

```
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
```

### Installing

* Simply download and copy the component to your Angular project.

## Usage
### Inject the service and ngx-loading module

- Use the component in app.module.

```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.pulse
    })
  ],
  providers: [EventHandlerService],
  bootstrap: [AppComponent]
})
```

### Show and hide loading screen from another component

- Inject the EventHandlerService to the component

```
constructor(private eventHanderService: EventHandlerService) { }
```

- To show the loading screen

```
showLoading() {
  this.eventHanderService.publish('SHOW_LOADING', true);
}
```

- To hide the loading screen

```
hideLoading() {
  this.eventHanderService.publish('SHOW_LOADING', false);
}
```

### Customize the look

- Define the configuration class (see ngx-loading documentation.

```
NgxLoadingModule.forRoot({
  animationType: ngxLoadingAnimationTypes.pulse
})
```

## Built With

* [Angular](https://angular.io/) - The Angular framework used
* [Ngx-loading](https://github.com/Zak-C/ngx-loading)

## Contributing

* **Galvin Nguyen** - *Initial work* - [silencieuxle](https://github.com/silencieuxle)

## Authors

* **Galvin Nguyen** - *Initial work* - [silencieuxle](https://github.com/silencieuxle)

## License

This project is licensed under the GNU General Public License.
