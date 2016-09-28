import { Mongo } from 'meteor/mongo';

export const Rooms = new Mongo.Collection("rooms");
// Rooms.allow({
//   insert: function(){
//     return true;
//   },
//   update: function(){
//     return true;
//   },
//   remove: function(){
//     return true;
//   }
// });
