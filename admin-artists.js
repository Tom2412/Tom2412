document.addEventListener("DOMContentLoaded", function () {
    const artistTable = document.getElementById("artistTable");
    const artistModal = document.getElementById("artistModal");
    const modalTitle = document.getElementById("modalTitle");
    const artistForm = document.getElementById("artistForm");
    const artistNameInput = document.getElementById("artistName");
    const artistBioInput = document.getElementById("artistBio");
    const cancelBtn = document.getElementById("cancelBtn");
    const addArtistBtn = document.getElementById("addArtistBtn");

    // Dữ liệu mẫu
    let artists = [
        { id: 1, name: "Nghệ Sĩ ", bio: "Nghệ sĩ nổi tiếng với các bài hát hit", songs: 4 },
        { id: 2, name: "Nghệ Sĩ B", bio: "Chuyên dòng nhạc trữ tình", songs: 3 },
    ];

    let editingArtist = null;

    // Render danh sách nghệ sĩ
    function renderArtists() {
        artistTable.innerHTML = "";
        artists.forEach(artist => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="p-2 border">${artist.id}</td>
                <td class="p-2 border">${artist.name}</td>
                <td class="p-2 border">${artist.bio}</td>
                <td class="p-2 border">${artist.songs}</td>
                <td class="p-2 border">
                    <button class="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 text-white rounded"
                        onclick="editArtist(${artist.id})">Sửa</button>
                    <button class="bg-red-500 hover:bg-red-600 px-2 py-1 text-white rounded"
                        onclick="deleteArtist(${artist.id})">Xóa</button>
                </td>
            `;
            artistTable.appendChild(row);
        });
    }

    // Mở modal thêm hoặc sửa nghệ sĩ
    function openModal(isEditing = false, artist = null) {
        editingArtist = isEditing ? artist : null;
        modalTitle.textContent = isEditing ? "Chỉnh Sửa Nghệ Sĩ" : "Thêm Nghệ Sĩ";
        artistNameInput.value = isEditing ? artist.name : "";
        artistBioInput.value = isEditing ? artist.bio : "";
        artistModal.classList.remove("hidden");
    }

    // Đóng modal
    function closeModal() {
        artistModal.classList.add("hidden");
    }

    // Thêm hoặc cập nhật nghệ sĩ
    artistForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = artistNameInput.value;
        const bio = artistBioInput.value;

        if (editingArtist) {
            editingArtist.name = name;
            editingArtist.bio = bio;
        } else {
            artists.push({ id: artists.length + 1, name, bio, songs: 0 });
        }

        closeModal();
        renderArtists();
    });

    // Xóa nghệ sĩ
    window.deleteArtist = function (id) {
        artists = artists.filter(artist => artist.id !== id);
        renderArtists();
    };

    // Sửa nghệ sĩ
    window.editArtist = function (id) {
        const artist = artists.find(artist => artist.id === id);
        openModal(true, artist);
    };

    addArtistBtn.addEventListener("click", () => openModal());
    cancelBtn.addEventListener("click", closeModal);

    renderArtists();
});
