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
    url: "tOPrwqhYwoY",
    title: "September 4th",
  },
  {
    url: "okdWQiTMv_w",
    title: "September 8th",
  },
  {
    url: "5N55HLgwkPI",
    title: "September 9th",
  },
  {
    url: "E9O6GnKJ_as",
    title: "September 10th",
  },
  {
    url: "u5T6TlWm_hM",
    title: "September 11th",
  },
  {
    url: "u12gG75v_oY",
    title: "September 14th",
  },
  {
    url: "NIAIktFNjhI",
    title: "September 15th",
  },
  {
    url: "VdZ0oSADUac",
    title: "September 16th",
  },
  {
    url: "U7bYj9m7a_k",
    title: "September 17th",
  },
  {
    url: "WHf1Z7ZS960",
    title: "September 18th",
  },

  {
    url: "arz_cGcJf4k",
    title: "September 21st",
  },
  {
    url: "6dwhnfIb7Rw",
    title: "September 22nd",
  },
  {
    url: "MuR_slphh-M",
    title: "September 28th",
  },
  {
    url: "Rcl4aERXrC0",
    title: "September 29th",
  },
  {
    url: "uWkL8HPAi0U",
    title: "September 30th",
  },
];

const videosOct = [
  {
    url: "cWiJXq__OcY",
    title: "October 1st ",
  },
  {
    url: "FOAYV9-yOkI",
    title: "October 2nd ",
  },
];

// Grab each div by month from HTML
const july = document.querySelector("#july");
const august = document.querySelector("#august");
const september = document.querySelector("#september");
const october = document.querySelector("#october");

// Sets video iframe
const URL = "https://www.youtube.com/embed/";
const allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

// Format each card
const divClass = "col-12 col-md-4 mx-auto"

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

    d.setAttribute("class", divClass)

    h.innerHTML = v.title;
    h.setAttribute("class", "mt-4")
    i.setAttribute("class", "iframe");
    i.setAttribute("src", URL + v.url);
    i.setAttribute("frameborder", "0");
    i.setAttribute(
      "allow",
      allow
    );
    
    appendNode(d, h)
    appendNode(d, i)
    appendNode(july, d)
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

    d.setAttribute("class", divClass)

    h.innerHTML = v.title;
    h.setAttribute("class", "mt-4")
    i.setAttribute("class", "iframe");
    i.setAttribute("src", URL + v.url);
    i.setAttribute("frameborder", "0");
    i.setAttribute(
      "allow",
      allow
    );
    
    appendNode(d, h)
    appendNode(d, i)
    appendNode(august, d)
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

   d.setAttribute("class", divClass)

    h.innerHTML = v.title;
    h.setAttribute("class", "mt-4")
    i.setAttribute("class", "iframe");
    i.setAttribute("src", URL + v.url);
    i.setAttribute("frameborder", "0");
    i.setAttribute(
      "allow",
      allow
    );
    
    appendNode(d, h)
    appendNode(d, i)
    appendNode(september, d)
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

    d.setAttribute("class", divClass)

    h.innerHTML = v.title;
    h.setAttribute("class", "mt-4")
    i.setAttribute("class", "iframe");
    i.setAttribute("src", URL + v.url);
    i.setAttribute("frameborder", "0");
    i.setAttribute(
      "allow",
      allow
    );
    
    appendNode(d, h)
    appendNode(d, i)
    appendNode(october, d)
  });
}
