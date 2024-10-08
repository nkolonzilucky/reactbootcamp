function Features() {
  const features = ['<li>✅ Push to deploy</li>', '<li>✅ SSL certificates</li>', '<li>✅ Simple queues</li>'];

  return `
      <h1>App Features</h1>
      <ul>
        ${features.map((feature) => feature).join('')}
      </ul>
    `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Features();
