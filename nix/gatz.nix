{ gatzCmd ? ""}:

let runScript = ''
      #! /usr/bin/env bash
      if [ ! -d node_modules ];
      then
         npm install
      fi;
         node_modules/gatsby/cli.js ${gatzCmd}
    '';

    gatz = import ./env.nix { inherit runScript; };

in gatz
