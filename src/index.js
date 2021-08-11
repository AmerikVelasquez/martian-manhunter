import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Random from './random.js';
import Type from './type.js';
import noDuplicate from './duplicate.js';
import Youtube from './youtube.js';

async function displayResults(response) {
    if (noDuplicate(response.activity)) {
        // await console.log(linkYoutube(response.activity))
        $('div#results').prepend(`<br><h3><a href="https://www.youtube.com/watch?v=${await linkYoutube('how to ' + response.activity)}">${response.activity}.</a></h3><p>Type: ${response.type}</p>`)

    } else {
        await console.log("duplicate avoided");
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
async function linkYoutube(activity) {
    let them = await Youtube.getYoutubeId(activity)
    return them.items[0].id.videoId;
}

$(document).ready(function () {
    $('button').click(function () {
        let type = $('select#option').val();
        console.log(type);
        makeApiCall(type);
        linkYoutube('how to make pancakes');
    })
});
