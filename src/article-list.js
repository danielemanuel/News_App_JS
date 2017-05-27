(function(exports) {

	function ArticleList() {
		this.articles = [];
	}

	ArticleList.prototype.addArticle = function(article) {
		this.articles.push(article);
	};

	ArticleList.prototype.showArticles = function() {
		return this.articles;
	};

	Article.prototype.createArticle = function(headline, body) {
		var article = new Article(headline, body);
		this.addArticle(article);
	};
		exports.ArticleList = ArticleList;
})(this);
