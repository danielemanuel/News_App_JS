(function(exports) {

    function Article(headline, body) {
      this.headline = headline;
      this.body = body;
    }

    Article.prototype.returnHeadline =function() {
        return this.headline;
    };

    Article.prototype.returnBody = function() {
        return this.body;
    };

    exports.Article = Article;
})(this);
