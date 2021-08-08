import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Random from './random.js';
import Type from './type.js';
import noDuplicate from './duplicate.js'

function displayResults(response) {
    if (noDuplicate(response.activity)) {
            $('div#results').append(`<br><h3>${response.activity}.</h3><p>Type: ${response.type}</p>`)
    } else {
        console.log("duplicate avoided");
        // $('div#results').append(`<br><h1>${response.error}<h1><p>I don't know how you broke it but you managed to. Congragradulations???</p>`)
    }
}


async function makeApiCall(type) {
    let response = null;
    switch (type) {
        case 'education':
        case 'recreational':
        case 'social':
        case 'diy':
        case 'charity':
        case 'cooking':
        case 'relaxation':
        case 'music':
        case 'busywork':
            response = await Type.getThisType(type);
            console.log(response);
            displayResults(response);
            break;
        case 'random':
            response = await Random.getRandom();
            console.log(response);
            displayResults(response);
            break;
        default:
            response = await Random.getRandom();
            console.log("somehow you broke something but here's a random activity for you :) " + response);
            displayResults(response);
            break;
    }

}

$(document).ready(function () {
    $('button').click(function () {
        let type = $('select#option').val();
        console.log(type);
        makeApiCall(type);
    })
});

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=YOURAPIKEY