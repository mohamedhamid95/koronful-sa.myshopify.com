const loader = document.querySelector('#loader');
const video = loader.querySelector('video');

if (loader && video) {
    video.addEventListener('ended', () => {
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    });

    // Fallback: remove after 8 seconds
    setTimeout(() => {
        if (!video.ended && document.body.contains(loader)) {
            loader.style.transition = 'opacity 0.5s ease';
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    }, 8000);
}