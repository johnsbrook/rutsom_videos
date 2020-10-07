const videosJul = [
  {
    url: "3HE2jxHJ2KY",
    title: "July 29th",
  },
  {
    url: "b6aMqbuwUhs",
    title: "July 30th",
  },
];

const videosAug = [
    {
      url: "3HE2jxHJ2KY",
      title: "September 29th",
    },
    {
      url: "b6aMqbuwUhs",
      title: "September 30th",
    },
  ];

  const videosSep = [
    {
      url: "3HE2jxHJ2KY",
      title: "September 29th",
    },
    {
      url: "b6aMqbuwUhs",
      title: "September 30th",
    },
  ];

const july = document.querySelector("#july");
const august = document.querySelector("#august");
const september = document.querySelector("#september");
const october = document.querySelector("#october");

const createNode = (elem) => {
  return document.createElement(elem);
};
const appendNode = (parent, elem) => {
  parent.appendChild(elem);
};


mapJul();
mapAug();
mapSep();
mapOct();

function mapJul() {
  videosJul.map((v) => {
    let l = createNode('li')
    let i = createNode("iframe");
    let p = createNode("p");
    let b = createNode("br");
    let d = createNode("div");
    let h = createNode("h5");

    h.innerHTML = v.title;
    i.setAttribute("class", "iframe");
    i.setAttribute("src", "https://www.youtube.com/embed/" + v.url);
    i.setAttribute("frameborder", "0");
    i.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    // i.setAttribute("allowFullScreen");

    appendNode(l, h)
    appendNode(l, d)
    appendNode(l, i)
    appendNode(july, l)
  });
}


videosSep.map((v) => {
    let l = createNode('li')
    let i = createNode("iframe");
    let p = createNode("p");
    let b = createNode("br");
    let d = createNode("div");
    let h = createNode("h5");

    h.innerHTML = v.title;
    i.setAttribute("class", "iframe");
    i.setAttribute("src", "https://www.youtube.com/embed/" + v.url);
    i.setAttribute("frameborder", "0");
    i.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    // i.setAttribute("allowFullScreen");

    appendNode(l, h)
    appendNode(l, d)
    appendNode(l, i)
    appendNode(july, l)
  });
}
