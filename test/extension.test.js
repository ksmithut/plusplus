/* global suite, test */

var path = require('path')
var vscode = require('vscode')

var TEST_DOCUMENT = path.join(__dirname, 'fixtures', 'test.txt')

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', function () {
  // Defines a Mocha unit test
  test('increments numbers', function () {
    return vscode.workspace
      .openTextDocument(TEST_DOCUMENT)
      .then(function (document) {})
  })
})
