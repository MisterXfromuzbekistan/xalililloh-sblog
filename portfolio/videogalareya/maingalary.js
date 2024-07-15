const videoGallery = document.getElementById('videoGallery');
const videoUrlInput = document.getElementById('video-url');
const searchInput = document.getElementById('search-input');

function addVideo() {
  const url = videoUrlInput.value;
  if (!validateURL(url)) {
    alert('Invalid URL. Please enter a valid video URL.');
    return;
  }

  const videoId = extractVideoID(url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const col = document.createElement('div');
  col.className = 'col-sm-6 col-md-4 col-lg-3 mb-3 position-relative';

  const iframe = document.createElement('iframe');
  iframe.src = embedUrl;
  iframe.className = 'video-box w-100';
  iframe.allowFullscreen = true;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerHTML = '&times;';
  deleteButton.onclick = () => {
    videoGallery.removeChild(col);
    saveGalleryToLocalStorage();
  };

  col.appendChild(iframe);
  col.appendChild(deleteButton);
  videoGallery.appendChild(col);

  videoUrlInput.value = '';
  saveGalleryToLocalStorage();
}

function deleteAllVideos() {
  if (confirm('Are you sure you want to delete all videos?')) {
    videoGallery.innerHTML = '';
    localStorage.removeItem('videoGallery');
  }
}

function searchVideos() {
  const searchTerm = searchInput.value.toLowerCase();
  const videos = videoGallery.querySelectorAll('.video-box');

  videos.forEach(video => {
    const videoUrl = video.querySelector('iframe').src.toLowerCase();
    if (videoUrl.includes(searchTerm)) {
      video.parentElement.style.display = 'block';
    } else {
      video.parentElement.style.display = 'none';
    }
  });
}

function validateURL(url) {
  const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return pattern.test(url);
}

function extractVideoID(url) {
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
}

function saveGalleryToLocalStorage() {
  const videoItems = videoGallery.querySelectorAll('.video-box iframe');
  const videoUrls = [];

  videoItems.forEach(item => {
    videoUrls.push(item.src);
  });

  localStorage.setItem('videoGallery', JSON.stringify(videoUrls));
}

function loadGalleryFromLocalStorage() {
  const videoUrls = JSON.parse(localStorage.getItem('videoGallery'));

  if (videoUrls && videoUrls.length > 0) {
    videoUrls.forEach(url => addVideoToGallery(url));
  }
}

function addVideoToGallery(url) {
  const videoId = extractVideoID(url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const col = document.createElement('div');
  col.className = 'col-sm-6 col-md-4 col-lg-3 mb-3 position-relative';

  const iframe = document.createElement('iframe');
  iframe.src = embedUrl;
  iframe.className = 'video-box w-100';
  iframe.allowFullscreen = true;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerHTML = '&times;';
  deleteButton.onclick = () => {
    videoGallery.removeChild(col);
    saveGalleryToLocalStorage();
  };

  col.appendChild(iframe);
  col.appendChild(deleteButton);
  videoGallery.appendChild(col);
}

document.addEventListener('DOMContentLoaded', loadGalleryFromLocalStorage);