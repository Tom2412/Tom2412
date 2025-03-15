
let artists = [];
let editingArtist = null;

const artistTable = document.getElementById("artistTable");
const artistModal = document.getElementById("artistModal");
const artistForm = document.getElementById("artistForm");
const artistNameInput = document.getElementById("artistName");
const artistBioInput = document.getElementById("artistBio");
const artistSongsInput = document.getElementById("artistSongs");

function openModal(artist = null) {
    editingArtist = artist;
    if (artist) {
        artistNameInput.value = artist.name;
        artistBioInput.value = artist.bio;
        artistSongsInput.value = artist.songs;
    } else {
        artistNameInput.value = "";
        artistBioInput.value = "";
        artistSongsInput.value = "";
    }
    artistModal.classList.remove("hidden");
}

function closeModal() {
    artistModal.classList.add("hidden");
}

artistForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = artistNameInput.value;
    const bio = artistBioInput.value;
    const songs = parseInt(artistSongsInput.value, 10);

    if (editingArtist) {
        editingArtist.name = name;
        editingArtist.bio = bio;
        editingArtist.songs = songs;
    } else {
        artists.push({ id: artists.length + 1, name, bio, songs });
    }

    closeModal();
    renderArtists();
});

function renderArtists() {
    artistTable.innerHTML = "";
    artists.forEach(artist => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="p-2 border">${artist.id}</td>
            <td class="p-2 border">${artist.name}</td>
            <td class="p-2 border">${artist.bio}</td>
            <td class="p-2 border">
                <div class="flex items-center space-x-2">
                    <button class="bg-blue-500 hover:bg-blue-600 px-2 py-1 text-white rounded"
                        onclick="decreaseSongs(${artist.id})">-</button>
                    <span>${artist.songs}</span>
                    <button class="bg-green-500 hover:bg-green-600 px-2 py-1 text-white rounded"
                        onclick="increaseSongs(${artist.id})">+</button>
                </div>
            </td>
            <td class="p-2 border">
                <button class="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 text-white rounded"
                    onclick="openModal(${JSON.stringify(artist).replace(/"/g, '&quot;')})">Edit</button>
                <button class="bg-red-500 hover:bg-red-600 px-2 py-1 text-white rounded"
                    onclick="deleteArtist(${artist.id})">Delete</button>
            </td>
        `;
        artistTable.appendChild(row);
    });
}

function increaseSongs(id) {
    const artist = artists.find(artist => artist.id === id);
    if (artist) {
        artist.songs += 1;
        renderArtists();
    }
}

function decreaseSongs(id) {
    const artist = artists.find(artist => artist.id === id);
    if (artist && artist.songs > 0) {
        artist.songs -= 1;
        renderArtists();
    }
}

function deleteArtist(id) {
    artists = artists.filter(artist => artist.id !== id);
    renderArtists();
}
