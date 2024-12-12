# Linker / Graph Configuration

The `[linker]` and `[graph]` configuration sections are optional.

## Linker

```toml
[linker]
ngram_range = [ 1, 2, 3 ]
stop_words = []
```

| Option | Description | Default |
|--------|-------------|-------------|
| `ngram_range` | Range of NGram sizes to use for keyword linking | `[1, 2, 3]` |
| `stop_words` | Additional stop words to exclude from keyword extraction | `[]` |

## Graph

```toml
[graph]
min_node_weight = 2.0
max_node_weight = 12.0
min_link_weight = 0.1
default_mode = "3d"
```

| Option | Description | Default |
|--------|-------------|-------------|
| min_node_weight | Minimum NGram weight to allow to show up in the graph | `2.0` (Increase to a larger number for large note directories) |
| max_node_weight | Maximum size of a node in the graph (larger values are clamped to this size) | `10.0` |
| min_link_weight | The minimum allowed link strength between a note and NGram | `0.1` (Increase to a larger number (0.2-0.3) for larger note directories) |
| default_mode | Default graph mode (2d/3d) | `"2d"` |

TODO: better explanation of what these options affect.

<!-- TODO: explanation -->
