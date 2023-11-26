function extraiLinks(arrayLinks) {
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checaStatus(listaURLs) {
  const arrayStatus = await Promise.all(
    listaURLs.map(async (url) => {
      try {
        const response = await fetch(url);
        return `${response.status} - ${response.statusText}`;
      } catch (erro) {
        return manejaErros(erro);
      }
    })
  );
  return arrayStatus;
}

export default async function listaValidada(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  const status = await checaStatus(links);

  return listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice],
  }));
}
