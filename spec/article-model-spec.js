(function ArticleModelInitialize() {
  var article = new Article('This is headline','This is the article body');
  console.log("Test 1: Article inistialize ");
  assert.isTrue(article.returnHeadline() === 'This is headline');
  console.log("Test 1: Article has a body ");
  assert.isTrue(article.returnBody() === 'This is the article body');

})();

(function ArticelModelUniqueId() {
  console.log("Test 1: Returns unique Id of the article");
  var article = new Article("Headline","Body",10);
  assert.isTrue(article.returnId() === 10);
})();
