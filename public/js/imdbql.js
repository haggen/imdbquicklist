$(function() {

  window.imdbql = {
    table: $('table tbody'),

    push: function(id) {
      var row = $('<tr></tr>').append('<td colspan="5">Wait for it...</td>');

      this.table.append(row);

      $.getJSON('http://www.omdbapi.com/?i=' + id, function(response) {
        row.html('');

        row.append('<td><a href="http://www.imdb.com/title/' + id + '">' + response.Title + '</a> (' + response.Year + ')' + '</td>');
        row.append('<td>' + response.Genre + '</td>');
        row.append('<td>' + response.Plot + '</td>');
        row.append('<td>' + response.Actors + '</td>');
        row.append('<td>' + response.imdbRating + '</td>');
      });
    }
  };

  $('input').typeahead({

    source: function(query, process) {
      var self, url, callback, directory;

      self = this;
      query = query.toLowerCase();

      // Gracefully remove stopwords form the beginning of the query
      if(query.match(/^(the|as?|of) (.+)/)) {
        query = query.replace(/^(the|as?|of) (.+)/, '$2');
      }

      query = query.substr(0, 4);
      directory = query.substr(0, 1);
      url = ['http://sg.media-imdb.com/suggests/', directory, '/', query, '.json'];
      callback = 'imdb$' + query;

      console.log(self, query, directory, url, callback);

      window[callback] = function(response) {
        var suggestions = [];

        // Reference table for title <-> ID
        self.reference = {};

        $.each(response.d, function(index, item) {
          var title;

          if('y' in item) {
            title = item.l + ' (' + item.y + ')';
            self.reference[title] = item.id;
            suggestions.push(title);
          }
        });

        process(suggestions);
      };

      $.getScript(url.join(''));
    },

    updater: function(value) {
      imdbql.push(this.reference[value]);
      return '';
    }

  });

});
