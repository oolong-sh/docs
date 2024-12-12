# Configuration

Oolong is configured using a TOML file that should be placed in your user configuration directory:

- Linux/MacOS: `~/.config/oolong/oolong.toml`
- Windows: todo

## Core Configuration

```toml
# List of directories to read into Oolong
note_directories = [ "~/notes" ]

# Subdirectory patterns to exclude from the file watcher
ignored_directories = [
    ".git",
    ".templates",
    "target",
    "node_modules",
]

# Whitelist of file extensions to use in linking
allowed_extensions = [
    ".md",
    ".mdx",
    ".tex",
    ".typ",
]

# Command to run when a node is clicked in the graph
open_command = [ "code" ]
```

| Option | Description | Recommended |
|--------|-------------|---------|
| `note_directories` | List of directories to use with Oolong | `["~/notes"]` |
| `ignored_directories` | Subdirectories to exclude from reading and linking | `[".git"]` |
| `allowed_extensions` | Whitelist of file extensions to use in linking | `[".md", ".txt", ".mdx", ".tex", ".typ"]` |
| `open_command` | Command to run when clicking a graph node | `["code"]` (See below for more details) |

### `open_command`

The `open_command` option is used by the graph to allow you to open a clicked note in an editor of your choice.

For example, to open a note in VSCode use `open_command = ["code"]`

To use your system default editor:
- Linux: `open_command = ["xdg-open"]`
- MacOS: `open_command = ["open"]`
- Windows: `open_command = ["start"]`

For more situations where you want to run a more complex command, separate consecutive arguments:
- `open_command = ["tmux", "neww", "-c", "shell", "nvim"]` (opens Neovim in a new tmux window in the active session)

<!-- TODO: example using a script -->

