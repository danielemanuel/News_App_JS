(function ArticleModelInitialize() {
    var article = new Article('This is headline');
    console.log("Test 1: Article inistialize ");
    assert.isTrue(article.returnHeadline() === 'This is headline');


})();
