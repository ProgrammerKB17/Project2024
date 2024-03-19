
const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Deadlift',
        'name': 'Deadlift.MP4',
        'duration': '0:57',
    },
    {
        'id': 'a2',
        'title': 'Bent-Over Row',
        'name': 'videoplayback (7).mp4',
        'duration': '0:13',
    },
    {
        'id': 'a3',
        'title': 'Pull-Ups',
        'name': 'The Push-Up.mp4',
        'duration': '1:03',
    },

    {
        'id': 'a4',
        'title': 'Seated Row',
        'name': 'Seated Cable Row.mp4',
        'duration': '0:17',
    },
    {
        'id': 'a5',
        'title': 'Lat Pull-Down',
        'name': 'custom select box.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'Dumbell Pull-over',
        'name': 'Dumbbell Pullover.mp4',
        'duration': '0:15',
    },
    {
        'id': 'a7',
        'title': 'Chest-Supported Row',
        'name': 'password strength checker javascript web app.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'T-Bar Row',
        'name': 'custom range slider.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'Single Arm-Smith Machine Row',
        'name': 'animated shopping cart.mp4',
        'duration': '3:38',
    },

];
data.forEach((video, i ) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.PNG" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.PNG';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.PNG';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.PNG';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

selected_video.onclick = () => {
    for (const all_videos of videos) {
        all_videos.classList.remove('active');
        all_videos.querySelector('img').src = 'images/play.PNG';
    }
    selected_video.classList.add('active');
    selected_video.querySelector('img').src = 'images/pause.PNG';
    let match_video = data.find(video => video.id == selected_video.dataset.id);
    main_video.src = 'videos/' + match_video.name;
    main_video_title.innerHTML = match_video.title;
};

$('img.wrapper').css('height','200px');
