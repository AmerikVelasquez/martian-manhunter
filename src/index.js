import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Random from './random.js';
// import Type from './type.js';

async function makeApiCall() {
    //case random:
    const response = await Random.getRandom();
    // getElements(response);
    console.log(response)
  }

//   function getElements(response){
//   }

$(document).ready(function(){
  $('button').click(function(){
    makeApiCall();
  })
});

