export async function GET(request) {
  const rappers = {
    "21 savage": {
      birthName: "Shéyaa Bin Abraham-Joseph",
      birthPlace: "Plaistow, London, England",
      age: 32,
    },
    "chance the rapper": {
      birthName: "Chancelor Bennett",
      birthPlace: "Chicago, Illinois",
      age: 32,
    },
    dylan: {
      birthName: "dylan",
      birthPlace: "dylan",
      age: 29,
    },
  };
  const { searchParams, _ } = new URL(request.url);
  const rapperName = searchParams.get("name");

  // /api?name=<name> - Get a single rapper
  if (rapperName) {
    const rapper = rappers[rapperName.toLowerCase()];
    return rapper
      ? Response.json(rapper)
      : new Response(JSON.stringify({ error: "Rapper not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
  }

  // /api
  return Response.json(rappers);
}
