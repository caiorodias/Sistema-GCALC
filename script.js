fetch('https://api.github.com/repos/octocat/hello-world')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar a página: ' + response.status);
    }
    return response.text();
  })
  .then(html => {
    // Aqui você pode manipular o conteúdo HTML como quiser
    console.log(html);
  })
  .catch(error => {
    console.error('Erro de requisição:', error);
  });