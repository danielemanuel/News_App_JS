(function ArticleModelInitialize() {
    var article = new Article('This is headline','This is the article body');
    console.log("Test 1: Article inistialize ");
    assert.isTrue(article.returnHeadline() === 'This is headline');
    console.log("Test 1: Article has a body ");
    assert.isTrue(article.returnBody() === 'This is the article body');

})();
