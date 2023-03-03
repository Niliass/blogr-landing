const Data = [
  {
    id: idGenerators(),
    title: "Product",
    links: [
      { id: idGenerators(), title: "Overview" },
      { id: idGenerators(), title: "Pricing" },
      { id: idGenerators(), title: "Marketplace" },
      { id: idGenerators(), title: "Features" },
      { id: idGenerators(), title: "Integrations" },
    ],
  },
  {
    id: idGenerators(),
    title: "Company",
    links: [
      { id: idGenerators(), title: "About" },
      { id: idGenerators(), title: "Team" },
      { id: idGenerators(), title: "Blog" },
      { id: idGenerators(), title: "Careers" },
    ],
  },
  {
    id: idGenerators(),
    title: "Connect",
    links: [
      { id: idGenerators(), title: "Contact" },
      { id: idGenerators(), title: "Newsletter" },
      { id: idGenerators(), title: "LinkedIn" },
    ],
  },
];

function idGenerators() {
  const chrs = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let id = "";
  while (id.length < 5) {
    id += chrs[Math.floor(Math.random() * chrs.length)];
  }
  return id;
}

export default Data;
