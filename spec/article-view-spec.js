(function ArticViewInitialize() {
    console.log("Test 1: Article View inistialize");
    var article = new Article('Headline','Body');
    var list= new ArticleList();
    var view = new ArticleView(list);
    console.log("Test 1: Article View dsiplay article list as ordiary list HTML ");
    list.addArticle('Hello');
    list.addArticle('Goodbye');
    // assert.isTrue(view.listArticles() === '<ul><li><div>Headline</div></li></ul>');
})();
