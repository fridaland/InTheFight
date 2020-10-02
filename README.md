### About In The Fight

This application is for In The Fight -

In The Fight is committed to the advancement of progressive politics that leads to structural change in our current social, political, and economic structures.

Our members share a unanimous desire to continue organizing and provide opportunities for direct action and education.

### Getting Started

On Mac OS X, we use Homebrew to install the native depencies (that is, node and npm). On Linux, we use
the Nix package manager to build a development environment.

#### Mac OS
After you have cloned this repo, run this setup script to set up your machine with the necessary dependencies to run and test this app:

```
% ./script/setup
```

Run the server

```
gatsby develop
```


Running the test-suite

```
% ./script/test
```

#### Linux (via Nix)

To install the Nix package manager, run

```
sh <(curl -L https://nixos.org/nix/install)
```

You can launch a development shell with
```
nix-shell
```

Note that (currently) to invoke gatsby, you must run, e.g.,
```
node_modules/gatsby/cli.js develop
```
