// Likes iniciales para cada post
const likes = [9, 12, 9];

function likePost(index) {
    likes[index]++;
    document.getElementById(`likes-${index}`).innerText = likes[index];
}
