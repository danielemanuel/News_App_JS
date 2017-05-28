article = {}
article.returnBody = function() {
	return "Body";
};

(function testViewingSingleArticle() {
	var singleArticleView = new SingleArticleView(article);
	console.log("Test 1: View only one article")
	assert.isTrue(singleArticleView.viewArticle() === "<div>Body</div>")
})();
