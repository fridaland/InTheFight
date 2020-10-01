{ pkgs ? import <nixpkgs> {inherit system;}
, system ? builtins.currentSystem
, nodejs ? pkgs."nodejs-12_x"}:

(pkgs.buildFHSUserEnv {
  name  = "node-env";
  targetPkgs = p: with p; [ nodejs nodePackages.npm ]; # ++ deps;
  runScript = ''
    zsh
  '';
}).env
