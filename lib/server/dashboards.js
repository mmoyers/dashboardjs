var dashboards = [

  { attrs: { 
      id :0,
      author:"UW",
      numberOfColumns: 2 
    },
    collections: {
      gadgets: {  "models": [
                    {"attrs":{"id":"skyView","url":"/gadgets/skyView.html","property":1,"longitude":-47.17500000000001,"latitude":11.8,"flySpeed":1}},
                    {"attrs":{"id":"nameResolver","url":"/gadgets/nameResolver.html"}},{"attrs":{"id":"dataSetSelector","url":"/gadgets/dataSetSelector.html"}},
                    {"attrs":{"id":"dataInquirer","url":"/gadgets/dataInquirer.html"}},{"attrs":{"id":"tableView","url":"/gadgets/tableView.html"}},
                    {"attrs":{"id":"plotView","url":"/gadgets/plotView.html"}}]}
    }
  },
  { attrs: { 
       id :1,
       author: 'GalaxyZOO',
       numberOfColumns: 2
     },
     collections: {
       gadgets: {  "models": [
                     {"attrs":{"id":"skyView","url":"/gadgets/skyView.html","property":1,"longitude":-47.17500000000001,"latitude":11.8,"flySpeed":1}},
                     {"attrs":{"id":"nameResolver","url":"/gadgets/nameResolver.html"}},{"attrs":{"id":"dataSetSelector","url":"/gadgets/dataSetSelector.html"}},
                     {"attrs":{"id":"dataInquirer","url":"/gadgets/dataInquirer.html"}},{"attrs":{"id":"tableView","url":"/gadgets/tableView.html"}}]}
     }
   },
   { attrs: { 
        id :2,
        author: "GalaxyZoo",
        numberOfColumns: 2 
      },
      collections: {
        "gadgets": {  "models": [
                      {"attrs":{"id":"skyView","url":"/gadgets/skyView.html","property":1,"longitude":-47.17500000000001,"latitude":11.8,"flySpeed":1}},
                      {"attrs":{"id":"nameResolver","url":"/gadgets/nameResolver.html"}},{"attrs":{"id":"dataSetSelector","url":"/gadgets/dataSetSelector.html"}}]}
      }
  },
  { attrs: { 
        id :3,
        author: 'Spencer',
        name: 'FITSViewer',
        numberOfColumns: 1
      },
      collections: {
        "gadgets": {  "models": [
                      {"attrs":{"id":"FITSViewer","url":"/gadgets/FITSViewer.html"}}]}
      }
  },
  { attrs: { 
        id :4,
        author: 'Spencer',
        name: 'ScatterPlotHistogramAndASCIILoader',
        numberOfColumns: 2 
      },
      collections: {
        "gadgets": {  "models": [
                      {"attrs":{"id":"ASCIIDataLoader","url":"/gadgets/ASCIIDataLoader.html"}},
                      {"attrs":{"id":"nameResolver","url":"/gadgets/nameResolver.html"}},{"attrs":{"id":"dataSetSelector","url":"/gadgets/dataSetSelector.html"}},
                      {"attrs":{"id":"dataInquirer","url":"/gadgets/dataInquirer.html"}},
                      {"attrs":{"id":"dataSetSelector","url":"/gadgets/dataSetSelector.html"}},
                      {"attrs":{"id":"scalableScatter","url":"/gadgets/scalableScatter.html"}},
                      {"attrs":{"id":"histView","url":"/gadgets/histView.html"}},
                      {"attrs":{"id":"tableView","url":"/gadgets/tableView.html"}}]}
      }
  }
];

module.exports.all = dashboards;

module.exports.find = function(id) {
  id = parseInt(id, 10);
  return dashboards[id];
}

module.exports.set = function(id, dashboard) {
  id = parseInt(id, 10);
  dashboards[id] = dashboard;
};

module.exports.length = function() {
  return dashboards.length;
}

module.exports.new = function() {
  var newId = dashboards.length;
  dashboards.push({
    attrs: { 
      id: newId,
      author:"UW" 
    },
    collections: {
      gadgets: {  models: [
                      {"attrs":{"id":"skyView","url":"/gadgets/skyView.html","property":1,"longitude":-47.17500000000001,"latitude":11.8,"flySpeed":1}},
                      {"attrs":{"id":"nameResolver","url":"/gadgets/nameResolver.html"}},{"attrs":{"id":"dataSetSelector","url":"/gadgets/dataSetSelector.html"}},
                      {"attrs":{"id":"dataInquirer","url":"/gadgets/dataInquirer.html"}},{"attrs":{"id":"tableView","url":"/gadgets/tableView.html"}},
                      {"attrs":{"id":"plotView","url":"/gadgets/plotView.html"}}]},
    }
  });
  return newId;
}

module.exports.insert = function(dashboard) {
  var id = dashboards.length + 1;
  dashboard.attrs.id = id;
  dashboards[id - 1] = dashboard;
  return id;
}