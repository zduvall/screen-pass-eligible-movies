const parseMovies =
  'Array.from(document.querySelectorAll(`a[href*="/movie/"]`)).map((m) => m.href.split("/").at(-1).split("-").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")).sort();';
const alertParsedMovies = `window.alert(${parseMovies})`;

const scrapeMovies = () => {
  const win = window.open('https://moviesanywhere.com/screen-pass', '_blank');

  const scriptElement = win.document.createElement('script');
  scriptElement.type = 'text/javascript';

  element.innerHTML = alertParsedMovies;

  setTimeout(function () {
    win.document.body.appendChild(scriptElement);
    window.alert('New script appended!');
  }, 5000);

  // win.scrape = () => {
  //   const allMovies = Array.from(
  //     document.querySelectorAll(`a[href*="/movie/"]`)
  //   )
  //     .map((m) =>
  //       m.href
  //         .split('/')
  //         .at(-1)
  //         .split('-')
  //         .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  //         .join(' ')
  //     )
  //     .sort();

  //   return allMovies;
  // };

  // setTimeout(() => {
  //   const allMovies = win.scrape();
  //   win.alert(allMovies);
  // }, 2000);
};

function openAndPush(url, id) {
  var win = window.open('https://streeteasy.com' + url + '?view=map');
  var element = win.document.createElement('script');
  element.type = 'text/javascript';
  element.innerHTML =
    'console.log("Starting magic...");var region_id=' +
    id +
    ';$=jQuery;var p=$(\'div[se\\\\:map\\\\:paths]\').attr(\'se:map:paths\');if(p){console.log("Found! pushing..."); $.get(\'https://localhost:9443/addPolygon\', {id: region_id, polygon: p}, function(){console.log("Done!")})}else{console.log("Not found! searched in: ", document);}';
  setTimeout(function () {
    win.document.body.appendChild(element);
    console.log('New script appended!');
  }, 10000);
}

// https://stackoverflow.com/questions/51310680/how-can-i-run-a-script-in-another-newly-opened-tab
