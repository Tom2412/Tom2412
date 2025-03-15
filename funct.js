document.addEventListener("DOMContentLoaded", function () {
    // Dữ liệu mẫu
    const users = [
        { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com" },
        { id: 2, name: "Trần Thị B", email: "b@gmail.com" },
    ];

    const songs = [
        { id: 1, name: "Bài hát 1", artist: "Ca sĩ A" },
        { id: 2, name: "Bài hát 2", artist: "Ca sĩ B" },
    ];

    // Render danh sách người dùng
    const userTable = document.getElementById("userTable");
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="p-2">${user.id}</td>
            <td class="p-2">${user.name}</td>
            <td class="p-2">${user.email}</td>
            <td class="p-2">
                <button class="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 text-white rounded">Sửa</button>
                <button class="bg-red-500 hover:bg-red-600 px-2 py-1 text-white rounded">Xóa</button>
            </td>
        `;
        userTable.appendChild(row);
    });

    // Render danh sách bài hát
    const musicTable = document.getElementById("musicTable");
    songs.forEach(song => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="p-2">${song.id}</td>
            <td class="p-2">${song.name}</td>
            <td class="p-2">${song.artist}</td>
            <td class="p-2">
                <button class="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 text-white rounded">Sửa</button>
                <button class="bg-red-500 hover:bg-red-600 px-2 py-1 text-white rounded">Xóa</button>
            </td>
        `;
        musicTable.appendChild(row);
    });
});
