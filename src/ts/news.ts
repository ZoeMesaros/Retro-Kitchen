const newsPage = document.getElementById("news") as HTMLDivElement;

const newDiv = document.createElement("div") as HTMLDivElement;
newDiv.innerHTML = `
<p>Hej</p>`;

newsPage.append(newDiv);
