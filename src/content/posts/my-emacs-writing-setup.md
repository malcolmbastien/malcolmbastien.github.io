---
title: My Emacs Writing Setup
status: seed        # seed | sprout | evergreen
tags:
  - Emacs
  - Writing
  - Software
summary: How I've configured emacs for the goal of writing
draft: true              # Optional, adds WIP banner
---

- Doom Emacs
- Shortcuts

## Doom Emacs


### Plugins

## Shortcuts

### Notes
| Key | Description |
| --- | --- |
| `SPC` `n` `n` | Org capture |
| `SPC` `n` `t` | Show all (not done) TODO entries from all agenda files in a single list |
| `SPC` `n` `v` | Show all entries that contain a phrase or words or regular expressions |
| `SPC` `n` `y` | Exports the current buffer/selection to the clipboard |
| `SPC` `n` `f` | Find file in notes |
| `SPC` `n` `F` | Browse notes |
| `SPC` `n` `s` | Search notes |
| `SPC` `n` `S` | Jump to an Org headline in 'org-agenda-files' |


### Leaving Emacs
| Key | Description |
| --- | --- |
| :qa    | Quit Emacs    |
| :wqa | Save all buffers and quit Emacs |
| `SPC` `q` `q` | Quit Emacs |
| `SPC` `q` `r` | Restart Emacs and restore session |

### Finding/saving files

| Key | Description |
| --- | --- |
| `SPC` `SPC` or `SPC` `p` `f` | Jump to file in project (like Atom/Sublime Text’s goto-anywhere) |
|`SPC` `.` or `SPC` `f` `f` | Explore files in current directory |
| `SPC` `f` `S-f` | Jump to file under current directory (recursive) |
| `SPC` `f` `s` | Save file |
| `SPC` `f` `S-s` | Save file as (prompts for location) |
| `SPC` `o` `p` | Initialize or toggle treemacs |
| `SPC` `o` `P` | find and focus the current file in the treemacs window |

### Buffer management

|Key|Description|
|---|---|
|`SPC` `,` or `SPC` `b` `b`|Switch to another buffer|
|`SPC` `<` or `SPC` `b` `S-b`|Switch to another buffer across workspaces|

### Search (and Replace)

|Key|Description|
|---|---|
|`SPC` `/` or `SPC` `s` `p`|Search across current project|
|`SPC` `s` `S-p`|Search another project (prompts you to select one)|
|`SPC` `s` `d`|Search in current directory (recursive)|
|`SPC` `s` `S-d`|Search in another directory (recursive)|

###  Scratch buffer

|Key|Description|
|---|---|
|`SPC` `x` or `SPC` `b` `x`|Open global scratch buffer in a popup|
|`SPC` `b` `S-x`|Switch to global scratch buffer in current window|
|`SPC` `p` `x`|Open project-local scratch buffer in a popup|
|`SPC` `p` `S-x`|Switch to project-local scratch buffer in current window|

### Window management

|Key|Description|
|---|---|
|`SPC` `w` `s`|Split the window horizontally|
|`SPC` `w` `v`|Split the window vertically|
|`SPC` `w` `d`|Delete current window|
|`SPC` `w` {`h`,`j`,`k`,`l`}|Select window in direction (left, below, above, right, respectively)|
|`SPC` `w` {`S-h`,`S-j`,`S-k`,`S-l`}|Swap current window with window in direction|
|`SPC` `w` {`C-S-h`,`C-S-j`,`C-S-k`,`C-S-l`}|Move current window to edge of frame in direction|
|`SPC` `w` `u` or `C-w` `C-r`|Undo or redo last change to window configuration|
|`SPC` `w` `o`| Enlarge current window. Again to undo.|
|`SPC` `w` `m` `m`|Delete other windows. Again to undo.|
|`{N}` `C-w` <code>\|</code>  |Change width of current window to `N` (a number)|
|`{N}` `C-w` `_`|Change height of current window to `N` lines|

### View

|Key|Description|
|---|---|
|`C--` | Decrease font size |
|`C-=` | Increase font size |
|`C-+` | Reset font size |

### Editting

|Key|Description|
|---|---|
| `>` | Right indent  |
| `<` | Left indent |
| `=` | Indent text |
| `~` | Invert case of character |
| `C-z` | Enable Emacs state |
| `C-]` | Jump to tag under point |
| `$` | Move the cursor to the end of the current line |

### Help

|Key|Description|
|---|---|
| `SPC` `h` `b` `f` | Show bindings for a mode |


### Writing

| Key | Description |
| --- | --- |
| `SPC` `t` `z` | Toggle Zen mode |
| `SPC` `t` `Z` | Toggle full-screen writeroom-mode |
| `g` `s` `SPC` | Jump to character |
| `M` {`up`, `down`} | move section up or down |
| `z` `n` | Create indirect buffer and narrow it to current sub-tree |
| `z` `N` | Widens narrowed buffers |
| `SPC` `m` `s` `n` | Narrow buffer to the current sub-tree |
| `SPC` `b` `c` | Clone indirect buffer |
| `SPC` `b` `C` | Clone indirect buffer to another window |
| `SPC` `w` `d` | Delete current window |


### Modifying Text Objects

| Key | Description |
| --- | --- |
| `c` `t` `[char]` | Change until target character |
| `c` `i` `w` | Change inner word |
| `c` `i` `"` | Change inner quotes |
| `c` `a` `"` | Change around quotes |
| `D`,`d` `$`| Delete from cursor to the end of the line |
| `C`,`c` `$` | Change from cursor to the end of the line |
| `x` | Delete a single character under the cursor |
| `r` | **Replace** a single character and stay in Normal mode. |
| `o` | Open a new line **below** the current one and enter Insert mode. |
| `O` | Open a new line **above** the current one. |
| `u` | **Undo**. |
|`C-r` | **Redo**. |

### Jumps

| Key | Description |
| --- | --- |
| `w` | Jump to the **start** of the next word. |
| `e` | Jump to the **end** of the next word |
| `b` | Jump **back** to the start of the previous word |
| `0` | Jump to the absolute **start** of the line |
| `^` | Jump to the first **non-blank** character of the line |
| `$` | Jump to the **end** of the line |
| `f` `[char]` | **Find** the next occurrence of a character on that line |
| `%` | Jump between matching brackets |
| `:[number]` | Jump to a specific line number |
