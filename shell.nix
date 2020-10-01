{ pkgs ? import <nixpkgs> {inherit system;}
, system ? builtins.currentSystem
, nodejs ? pkgs."nodejs-12_x"}:

(pkgs.buildFHSUserEnv {
  name  = "node-env";
  targetPkgs = p: with p; [ autoconf automake libtool zlib nodejs nodePackages.npm ]; # ++ deps;
  runScript = ''
    zsh
  '';
}).env
