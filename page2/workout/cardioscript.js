
const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Burpees',
        'name': 'The Burpee.mp4',
        'duration': '0:51',
    },
    {
        'id': 'a2',
        'title': 'Mountain Climbers',
        'name': 'Mountain Climbers.mp4',
        'duration': '0:39',
    },
    {
        'id': 'a3',
        'title': 'High Knees',
        'name': 'Exercise Library_ High Knees.mp4',
        'duration': '0:07',
    },

    {
        'id': 'a4',
        'title': 'Jumping Jacks',
        'name': 'Jumping Jacks - XFit Daily.mp4',
        'duration': '0:44',
    },
    {
        'id': 'a5',
        'title': 'Side-to-Side',
        'name': 'The Burpee.mp4',
        'duration': '0:51',
    },
    {
        'id': 'a6',
        'title': 'Jump Squats',
        'name': 'Mountain Climbers.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a7',
        'title': 'High Knees',
        'name': 'Exercise Library_ High Knees.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a8',
        'title': 'Jumping Jacks',
        'name': 'Jumping Jacks - XFit Daily.mp4',
        'duration': '3:59',
    },

];

data.forEach((video, i) => {
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

