const API_URL = 'http://localhost:3000/api/series';

document.getElementById('serieForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const releaseDate = document.getElementById('releaseDate').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, releaseDate, author, genre })
    });

    const serie = await response.json();
    appendComplaint(serie);

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('releaseDate').value = '';
    document.getElementById('author').value = '';
    document.getElementById('genre').value = '';
});

async function loadSeries() {
    const response = await fetch(API_URL);
    const series = await response.json();
    series.forEach(appendSerie);
}

function appendComplaint(serie) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${serie.title}</strong>
        <p>${serie.description}</p>
        <p>${serie.releaseDate}</p>
        <p>${serie.author}</p>
        <p>${serie.genre}</p>
        <button onclick="deleteSerie('${serie._id}')">Deletar</button>
    `;
    document.getElementById('seriesList').appendChild(li);
}

async function deleteSerie(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload();
}

loadSeries();
