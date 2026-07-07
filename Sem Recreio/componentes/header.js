async function header() {
  const response = await fetch('../components/header/header.html');
  const dados = await response.text();
  document.getElementById('header').innerHTML = dados;
}

header();