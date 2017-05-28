(function(exports) {

	function ArticleListView(articleList) {
		this._articleList = articleList;
	};

	ArticleListView.prototype.displayArticles = function() {
		articles = '<ol>';
		this._articleList.showArticles().forEach(function(element) {
			articles += `<li><div><a href="${element.returnId()}">${element.returnHeadline()}</a></div></li>`;
		});
		articles += '</ol>';
		return articles;
	};

	exports.ArticleListView = ArticleListView;

})(this);
