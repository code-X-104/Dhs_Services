async function track(optionalId = null) {
  const id = (optionalId || document.getElementById("trackingId").value).trim().toUpperCase();
  const result = document.getElementById("result");

  document.getElementById("trackingId").value = id;

  try {
    const response = await fetch("data.json");
    const trackingData = await response.json();
    const info = trackingData[id];

    if (info) {
      result.innerHTML = `
        <h4>Sendungsdetails für ${id}</h4>
        <p><strong>Artikel:</strong> ${info.item}</p>
        <p><strong>Status:</strong> ${info.status}</p>
        <p><strong>Standort:</strong> ${info.location}</p>
        <p><strong>Zuletzt aktualisiert:</strong> ${info.updated}</p>
      `;
    } else {
      result.innerHTML = `<p style="color:red;">Sendungsnummer nicht gefunden.</p>`;
    }
  } catch (err) {
    result.innerHTML = `<p style="color:red;">Fehler beim Laden der Daten.</p>`;
  }
}
