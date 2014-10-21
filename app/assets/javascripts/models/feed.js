NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "api/feeds",

  entries: function () {

    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries([], {
        feed: this
      })
      this._entries.comparator = "published_at";
    }
    return this._entries;
  },

  parse: function(response) {
    if (response.latest_entries) {
      this.entries().set(response.latest_entries, {parse: true});
      delete response.latest_entries;
    }
    return response;
  }


});