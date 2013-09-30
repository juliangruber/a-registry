module.exports = function(query) {
  if (typeof query == 'string') {
    return function(service) {
      return service.meta == query;
    };
  } else if (typeof query == 'function') {
    return function(service) {
      return query(service.meta, service);
    };
  }
};
