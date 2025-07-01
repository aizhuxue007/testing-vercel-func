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
  return Response.json(rappers);
}
