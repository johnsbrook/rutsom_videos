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
    url: "oYrUoPYv2mo",
    title: "August 10th",
  },
  {
    url: "rccf63EU6aU",
    title: "August 11th",
  },
  {
    url: "Fv6EzL8kFCM",
    title: "August 12th - Video 1",
  },
  {
    url: "p7uYqDOjJ1c",
    title: "August 12th - Video 2",
  },
  {
    url: "nDVTT7d4Hk8",
    title: "August 13th",
  },
  {
    url: "0kJBuiJen7o",
    title: "August 14th",
  },
  {
    url: "RqyQKKF9_-A",
    title: "August 17th",
  },
  {
    url: "zyZqAfxyxR0",
    title: "August 18th",
  },
  {
    url: "n8kJ-mZdTqc",
    title: "August 19th",
  },
  {
    url: "8PWlmWwvtQY",
    title: "August 20th",
  },
  {
    url: "geSrECFhRX8",
    title: "August 21st",
  },
  {
    url: "LXj1_CpHKOs",
    title: "August 24th",
  },
  {
    url: "MzLLzjMASzQ",
    title: "August 25th",
  },
  {
    url: "un6yaw8Gp2s",
    title: "August 26th",
  },
  {
    url: "Xj6C3yR1Y_U",
    title: "August 27th",
  },
  {
    url: "XVSmhzADkq8",
    title: "August 28th",
  },
  {
    url: "UWDBPJF1JhM",
    title: "August 31st",
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

const videosOct = [
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

// mapping july
function mapJul() {
  videosJul.map((v) => {
    let l = createNode("li");
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

    appendNode(l, h);
    appendNode(l, d);
    appendNode(l, i);
    appendNode(july, l);
  });
}

// mapping august
function mapAug() {
  videosAug.map((v) => {
    let l = createNode("li");
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

    appendNode(l, h);
    appendNode(l, d);
    appendNode(l, i);
    appendNode(august, l);
  });
}

//mapping september
function mapSep() {
  videosSep.map((v) => {
    let l = createNode("li");
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

    appendNode(l, h);
    appendNode(l, d);
    appendNode(l, i);
    appendNode(september, l);
  });
}

// mapping october
function mapOct() {
  videosOct.map((v) => {
    let l = createNode("li");
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

    appendNode(l, h);
    appendNode(l, d);
    appendNode(l, i);
    appendNode(october, l);
  });
}
