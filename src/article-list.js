(function(exports) {

	function ArticleList() {
		this.articles = [];
	};

	ArticleList.prototype.addArticle = function(article) {
		this.articles.push(article)
	};

	ArticleList.prototype.showArticles = function() {
		return this.articles
	};



    exports.ArticleList = ArticleList;
})(this);
