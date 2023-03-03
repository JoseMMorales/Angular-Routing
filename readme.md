## Description of this project

As far as we know in Angular Routing there is more than moving the user between multiple views of an application. In this repo, we will discover further about sophisticated routing features to face real-world situations when building your applications. Overall, we will discover how defining multiple routes and pass data to routes, preloading data, and grouping routes, how to guard those routes, how to use multiple router-outlet, and improve performance by asynchronously loading.

## Project Routes Tree...

<div align="center">

![General schema of the project with routes](https://user-images.githubusercontent.com/43299285/222723037-11090afc-4411-415c-b607-00f293ab3a87.png)

</div>

## Slide breakdown by feature...

## [Activate Routes](https://angular.io/api/router/ActivatedRoute)

Provides access to information about a route associated with a component that is loaded in an outlet

<div align="center">
  <img width="599" alt="Activated Routes" src="https://user-images.githubusercontent.com/43299285/222709612-ca1eccae-e24a-47dd-b872-ca4059ec1d03.PNG">
  <img width="599" alt="Snapshot" src="https://user-images.githubusercontent.com/43299285/222709693-cc88056d-7719-4b53-9997-af51ddfbf246.PNG">
  <img width="599" alt="Snapshot" src="https://user-images.githubusercontent.com/43299285/222709742-df791d6e-7bda-4c67-af0d-c4992b1a9055.png">
</div>

## Optional Parameters in a route

These Parameter are used when they are optional and we need to pass complex and multiple parameters.

<div align="center">
  <img width="599" alt="Optional Parameters" src="https://user-images.githubusercontent.com/43299285/222710604-d5d17703-e344-442f-b5ec-83bbffde810e.PNG">
  <img width="599" alt="Reading Optional Parameters" src="https://user-images.githubusercontent.com/43299285/222710630-38c817c9-feff-44ac-8148-142f0d797f0c.PNG">
</div>

## Query Parameters in a route

We can pass optional parameters like page number, sorting & filter criteria to the component. (Ex: User go back to a previous page where has filtered elements in a list)

<div align="center">
  <img width="599" alt="Query Parameters" src="https://user-images.githubusercontent.com/43299285/222711082-09853654-efa5-4327-b01d-1709e54b3819.PNG">
  <img width="599" alt="Reading Query PArameters" src="https://user-images.githubusercontent.com/43299285/222711122-f08d3650-1a35-449d-a48b-b1ba82e4f804.PNG">
</div>

## Data Property

Using this property allow us to pass dynamically static data through the route, giving to the routed component the opportunity to retrieve the data from the history state object.

<div align="center">
  <img width="648" alt="Data property in route" src="https://user-images.githubusercontent.com/43299285/222711287-7c235f81-cbc8-447e-81e4-a2d2a653da11.PNG">
</div>

## [Resolver](https://angular.io/api/router/Resolve)

#### Using a Resolver:

With resolvers we can load all data before we navigate to a route.

- Build a route resolver service
- Add resolve to the route configuration
- Read the data from ActivatedRoute

<div align="center">
  <img width="648" alt="ROute Resolver service" src="https://user-images.githubusercontent.com/43299285/222711912-4bdcad1d-38e4-4e27-9f85-df7acf8374d2.PNG">
  <img width="648" alt="ROute Resolver service" src="https://user-images.githubusercontent.com/43299285/222712024-dbc6219e-531f-4b70-b601-2319be92349b.png">
  <img width="648" alt="ROute Resolver service" src="https://user-images.githubusercontent.com/43299285/222712075-23c49bde-a554-430d-9354-4f950acc4798.png">
</div>

## Child Routes

As Angular is a component-based framework this feature is very useful to identify sub-components nested inside already-defined parent routes.

<div align="center">
  <img width="648" alt="Activating child outes" src="https://user-images.githubusercontent.com/43299285/222713569-a6fd0ccd-35c9-4273-9704-d91650bc1966.PNG">
  <img width="653" alt="obtain data for a Child ROute" src="https://user-images.githubusercontent.com/43299285/222713632-045a3a51-5603-4dc8-96d1-47072c1e88ea.PNG">
  <img width="637" alt="Vaidating forms in child routes" src="https://user-images.githubusercontent.com/43299285/222713656-9f038e14-e0c7-4374-949c-d0f819a34b04.PNG">
</div>

## Grouping Routes

When parent component is splitting the tree route in different components, we can group all of them by simplifying the structure in your routing module.

<div align="center">
  <img width="329" alt="Grouping routes" src="https://user-images.githubusercontent.com/43299285/222714813-7b5ddfd4-49a9-4a90-b68b-d3d8dbbff8e5.PNG">
</div>

## Active CLASS to anchor

Adding class to style anchors coming from same parent component

<div align="center">
  <img width="358" alt="active" src="https://user-images.githubusercontent.com/43299285/222717385-7aab9d79-3dea-4ae7-9844-52d339156824.PNG">
</div>

## [Routing Events](https://angular.io/api/router/RouterEvent)

Angular Router raises events when it navigates from one route to another route. It raises several events such as NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ResolveStart, etc. You can listen to these events and find out when the state of the route changes.

<div align="center">
  <img width="599" alt="Reacting to Events" src="https://user-images.githubusercontent.com/43299285/222717891-6f8ee86f-70ba-4865-aa32-10a2d4edf916.PNG">
</div>

## Watching to Events in Console

Adding on app-routing.module enableTracing property we will be able to see router outcome each time user is navigating thoughout the App.

<div align="center">
  <img width="491" alt="watching routing events in console" src="https://user-images.githubusercontent.com/43299285/222717549-3b8352cb-05c4-4943-9781-5e0040c5458b.PNG">
</div>

## Multiple router-outlet

Rendering different components at same time under parent outer-outlet if the App requires retrieve data in same view.

### Naming different routers

<div align="center">
  <img width="699" alt="Defining named router outlet" src="https://user-images.githubusercontent.com/43299285/222718378-95e6fcb1-aae5-4063-9468-120835857bbd.PNG">
</div>

### Configuring routers in modules

<div align="center">
  <img width="599" alt="Configurin secundary routes" src="https://user-images.githubusercontent.com/43299285/222718591-effaec08-8638-42a1-b728-f7c1fa59189b.PNG">
</div>

### Ex: Dashboard with multiple router-outlet

<div align="center">
  <img width="799" alt="Configurin secundary routes" src="https://user-images.githubusercontent.com/43299285/222718759-6e32573e-5919-4d46-a83e-3edc100594d3.png">
</div>

## Guard the routes

- <b>canActivate:</b> Guard navigation to a route, commonly used to limit route access to specific usersand ensure prerequisites are met.

- <b>canActivateCHild:</b> Guard navigation to a child route, commonly used to meet prerequisites before accessing to a child route.

- <b>canDeactivate:</b> Guard navigation away from a route, commonly used to let the user kow if sure to move with navigation(pop up is usually shown).

- <b>canLoad:</b> Prevent asynchronous routing before load, commonly used to prevent a route if user cannot access it.

- <b>resolve:</b> Prefetch data before activating a route

<div align="center">
  <img width="599" alt="Build a guard" src="https://user-images.githubusercontent.com/43299285/222720125-6986d5bc-a255-4b96-ab4c-35476808e9c1.PNG">
  <img width="599" alt="Guard a route" src="https://user-images.githubusercontent.com/43299285/222720164-2e8e43d9-a0bb-4514-b9c4-454937a12ea2.PNG">
</div>

## [Lazy Loading ](https://angular.io/guide/lazy-loading-ngmodules)

With Lazy Loading we will limit the modules that are loaded to the ones that the user currently needs. This can improve your application’s performance and reduce the initial bundle size.

<div align="center">
  <img width="505" alt="lazy loading" src="https://user-images.githubusercontent.com/43299285/222721859-36995c34-2f01-4ae9-b2db-6babce46675f.PNG">
</div>

## Resources Used in this project...

<b>Pluralshight Course</b>: https://app.pluralsight.com/library/courses/angular-routing/description

### Technology

<b>@angular/cli</b>: "14.0.0"</br>
<b>rxjs</b>: "7.5.0"</br>
<b>typescript</b>: "4.8.4"</br>

## Author:

Jose MMorales
