import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Rpets } from '../api/items.js';

import './body.html';


Template.footer.helpers({
    pet(){
        return  Rpets.find({}); 
        
    }
});

Template.body.events({
  'submit .petRegister'(event){
    // Prevent default browser form submit
    event.preventDefault();
    
    
    // Get value from form element
    const target = event.target;
    const name = target.petName.value;
    
    // Insert a task into the collection
    Rpets.insert({
        owner: Meteor.userId(),
        username: Meteor.user().username,
        name,
        createdAt: new Date(), // current time
    });
    
    
    // Clear form
    target.petName.value = '';
  },
});