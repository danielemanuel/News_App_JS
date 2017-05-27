(function(exports) {

	function ArticleView(articleList) {
		this.articleList = articleList;
	}

	ArticleView.prototype.getArticleList = function() {
		return this.articleList;
	};

	ArticleView.prototype.displayArticles = function() {
		// var article = new Article("Headline","Body")
		var display = "<ol>";
		this.articleList.showArticles().forEach(function(aarticle) {
				display += "<li><div>" + article.returnHeadline() + "</div></li>"
		});
		return(display + '</ol>')
	};



		exports.ArticleView = ArticleView;
})(this);
