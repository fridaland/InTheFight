{ npmCmd ? ""}:

let runScript = ''
      npm ${npmCmd}
    '';

    npm = import ./env.nix { inherit runScript; };

in npm
