import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/

// Inicializações dos componentes js
Template.header.onRendered(function () {
	// Inicialização do sideNav (para o menu reduzido)
	$('.button-collapse').sideNav();
	// $("#login-sign-in-link").replaceWith("<a class=\"login-link-text\" id=\"login-sign-in-link\">Entrar</a>");
    $('.parallax').parallax();
    
    $('.carousel').carousel();
    
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    
});