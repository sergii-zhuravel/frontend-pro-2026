// start: swapi.info/api
// end: people/1
export async function getSwapiData(start, end) {
  try {
    const response = await fetch(`${start}/${end}`);

    return {
      status: "success",
      data: await response.json(),
    };
  } catch {
    return "Ups";
  }
}
