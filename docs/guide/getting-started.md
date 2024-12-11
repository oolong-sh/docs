---
outline: deep
editLink: true
---

# Getting Started

Oolong is made up of two components:
- **Oolongd**: The daemon that indexes and links your notes, enables cloud synchronization, and provides an API that powers the Oolong editor.
- **Oolong Editor**: Our custom editor built to run from a browser or natively for any desktop operating system.
    - Oolong Editor requires Oolongd to be installed, but it can be configured to run on a remote server, allowing you to take notes and view your graph from anywhere with an internet connection.


## Installation

Oolongd and Oolong Editor currently must be installed separately (but we are working on creating a bundled version).

### Oolongd (Daemon)

Oolongd can be installed with go install:
```sh
go install github.com/oolong-sh/oolongd
```

It can also be built from source:
```sh
git clone https://github.com/oolong-sh/oolongd.git
cd oolongd
go build
```

### Oolong Web Editor

<!-- TODO: -->

## Usage

Oolongd is capable of running entirely on its own (without the Oolong editor), allowing you to use your editor of choice. Oolongd also includes the knowledge graph view, available directly in your web browser at [http://localhost:11975](http://localhost:11975).
