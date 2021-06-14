/* setting cursor on images */ 
let img = $('img');
img.css('cursor', 'pointer');

/* creating modal */
img.attr('data-bs-toggle',"modal");
img.attr('data-bs-target', '#modalId');


let modal = $('#modalId');
modal.on("show.bs.modal", function(event){
    let imageClicked = $(event.relatedTarget);
    let imageSrc = imageClicked.attr('src');
    let imageAlt = imageClicked.attr('alt');
    let modalImage = $('#modalImage');
    modalImage.attr('src', imageSrc);
    modalImage.attr('alt', imageAlt);
});