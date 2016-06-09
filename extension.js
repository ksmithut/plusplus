'use strict'

var vscode = require('vscode')
var Range = vscode.Range
var Position = vscode.Position
var Selection = vscode.Selection

exports.activate = function activate(context) {
    vscode.commands.registerCommand('extension.increment', increment)
    vscode.commands.registerCommand('extension.decrement', decrement)
}

exports.deactivate = function deactivate() {

}

function loopSelections(fn) {
    var editor = vscode.window.activeTextEditor
    var document = editor.document
    var selections = editor.selections
    var replaceRanges = []

    editor.edit(function(edit) {
        for (var i = 0, len = selections.length; i < len; ++i) {
            var sel = selections[i]
            var txt = document.getText(new Range(sel.start, sel.end))
            var newTxt = String(fn(txt))
            if (txt === newTxt) {
                replaceRanges.push(sel)
            } else {
                edit.replace(sel, newTxt)
                var startPos = new Position(
                    sel.start.line,
                    sel.start.character
                )
                var endPos = new Position(
                    sel.start.line + newTxt.split(/\r\n|\r|\n/).length - 1,
                    sel.start.character + newTxt.length
                )
                replaceRanges.push(new Selection(startPos, endPos))
            }
        }
    })

    editor.selections = replaceRanges
}

function loopNumbers(fn) {
    loopSelections(function(txt) {
        var num = parseInt(txt, 10)
        return isNaN(num) ? txt : fn(num)
    })
}

function increment() {
    loopNumbers(function(num) { return num + 1 })
}

function decrement() {
    loopNumbers(function(num) { return num - 1 })
}
