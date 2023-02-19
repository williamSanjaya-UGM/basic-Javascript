const getDetails = async () => {
  //Fire both off
  const wesPromise = axios.get("https://api.something1");
  const scottPromsie = axios.get("https://api.something2");
  //Wait to both to come back
  const [wes, scott] = await Promise.all([wesPromise, scottPromsie]);
  const html = `
    <h1>${wes.name}</h1>
    <h1>${scott.name}</h1>
    `;
  return html;
};
