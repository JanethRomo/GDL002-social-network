import logInTemplate from './templates/logIn';
import registerTemplate from './templates/register';
import wallTemplate from './templates/wall';
import events from './events';

// import buttons from './firebase.js'

const contentDiv = document.querySelector('.content');

let routes = {
  '/': {
    template: logInTemplate,
    events: events.homeEvents
  },
  '/index.html': {
    template: logInTemplate,
    events: events.homeEvents
  },
  '/ingresar':  {
    template: logInTemplate,
    events: events.homeEvents
  },
  '/registrar':  {
    template: registerTemplate,
    events: events.homeEvents
  },
  '/muro': {
    template: wallTemplate,
    events: events.wallEvents
  },
};

  /* window.onpopstate = () => {
    const pathName = window.location.pathname
    contentDiv.innerHTML = routes[pathName].template;
    routes[pathName].events();
  } */

let elementClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  window.history.pushState({}, pathName, window.location.origin + pathName);
  window.history.back();
  contentDiv.innerHTML = routes[pathName].template;
  routes[pathName].events();

}

contentDiv.innerHTML = routes[window.location.pathname].template;

events.homeEvents();
export { elementClick, routes }
