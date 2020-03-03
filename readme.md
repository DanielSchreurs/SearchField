# Search Field

> A simple and efficient way to put the focus in the search field. All this is done by pressing the keys `ctr+shift+L`.

This Safari extension allows you to search for information on sites with a search field using a keyboard shortcut.



## How to use it : CTR + MAJ + L

![](./readme.gif)



## Safari Installation:

1. [Download Extension]()

## Chrome Installation:

1. [Download Safari](http://apple.com/)

## Selector

The extension is simple but requires good HTML semantics. The selector that currently allows this is summarised as follows:   

```json
[
  "input[aria-label*='search']",
  "input[aria-label*='Search']",
  "input[aria-label*='rechercher']",
  "input[aria-label='Rechercher']",
  "input[type='search']",
  "input[name*='search']",
  "input[id*='search']"
]
```
