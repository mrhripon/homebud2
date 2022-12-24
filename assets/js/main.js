document.addEventListener('DOMContentLoaded', function () {
    // Activation for Top Carousel 
    let topCarousel = new Splide('#topCarousel', {
        pagination: false,
        arrowPath: 'm12.917 36.625-2.542-2.583 14.083-14.084L10.375 5.833l2.542-2.541 16.666 16.666Z'
    })

    topCarousel.mount();


    // Script for close topbar
    document.querySelector('.close_topbar').addEventListener('click', function () {
        document.querySelector('.top-bar').classList.add('d-none');
    })



    // Activation for Seed Carousel 
    let seedCarousel = new Splide('#seedCarousel', {
        pagination: false,
        arrowPath: 'm12.917 36.625-2.542-2.583 14.083-14.084L10.375 5.833l2.542-2.541 16.666 16.666Z',
        perPage: 4,
        gap: 30
    })
    seedCarousel.mount();


    // activation for work-area video 
    let mainVideo = document.getElementById('video-main');
    mainVideo.addEventListener('click', function () {
        let bp = BigPicture({
            el: mainVideo,
            ytSrc: event.target.closest('.video-wrap').dataset.ytId,
        })
    })


    // Activation for Seed Carousel 
    let testimonialCarousel = new Splide('#testimonialCarousel', {
        pagination: false,
        arrowPath: 'm12.917 36.625-2.542-2.583 14.083-14.084L10.375 5.833l2.542-2.541 16.666 16.666Z',
        perPage: 1,
        gap: 30,
        padding: 250
    })
    testimonialCarousel.mount();
})


