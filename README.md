# plusplus README

This is a Visual Studio Code plugin to increment/decrement selected numbers by
one.

For single selections, this is a useless plugin. You can just select your number
and replace it yourself. This plugin comes in handy when you have multiple
numbers selected, and you want to increment/decrement them all by one.

There may be another plugin that does this, this was also just an experiment
with creating/publishing a Visual Studio Code plugin.

## Features

Increments/decrements all of the selected numbers. It is suggested to only be
used with multiple selections. Also, make sure you only have the number selected
with no extra characters. This plugin uses the `parseInt(num, 10)`, so it will
strip out whitespace. If the result of `parseInt` is not a number, it will be
skipped as a non-number cannot be incremented/decremented.

## Extension Settings

### Commands:

- `increment` Increments selected numbers `cmd + shift + =`
- `decrement` Decrements selected numbers `cmd + shift + -`

## Known Issues

This is a naive attempt at an extension and will probably not have all of the
features that people would find useful. If you have any suggestions, PRs are
welcome, or if you don't want to submit a PR, feel free to open an issue with
your desired features/bug fixes.

## Release Notes

### 1.0.0

Initial release of plusplus
