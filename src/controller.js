(function(exports) {

	function Controller(articleList) {
		this.articleList = articleList;
	}

	Controller.prototype.addArticle = function(headline, body) {
		this.articleList.createArticle(headline, body);
	};

	Controller.prototype.addArticleView = function() {
		this.articleView = new ArticleView(this.articleList);
	};

	Controller.prototype.displayHTML = function() {
		document.getElementById('app').innerHTML = "Guten morgan!";
	};

		exports.Controller = Controller;
})(this);
