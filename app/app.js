import { getContent } from "../model/model.js";

function route() {
    let hash = window.location.hash;
    let pageID = hash.replace("#", "")

    /* (if pageID exists) ? (nothing) : (else pageID is home) */
    pageID ? pageID = pageID : pageID = "home";

    getContent(pageID);

}

function initListeners() {
    $(window).on("hashchange", route)
    route();
}

$(document).ready(function () {
    initListeners();
});