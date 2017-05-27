

    (function ArticlListInitialize() {
    console.log("Test 1: Article List inistialize, add and show articles ");
    var list = new ArticleList();
    var article = new Article('Headline','Body')
    list.addArticle(article);
    assert.isTrue(list.showArticles()[0] === article);
    // console.log("Test 1: Article has a body ");
    // assert.isTrue(article.returnBody() === 'This is the article body');

})();
