{ pkgs ? import <nixpkgs> {inherit system;}
, system ? builtins.currentSystem
, nodejs ? pkgs."nodejs-12_x"}:

let
  lib = pkgs.lib;
  super = import ./composition.nix {
    inherit pkgs nodejs;
    inherit system;
  };
  pngquant = pkgs.pngquant;

  brokenNodePackages = [
    "node-gyp"
    "gyp"
    "sharp"
  ];

  unbroken = n: v: !(lib.any (x: (lib.hasPrefix x n)) brokenNodePackages);

  self = super //  rec {
    "gatsby-plugin-sharp-^2.6.24" =
      super."gatsby-plugin-sharp-^2.6.24".override (old: {
        nativeBuildInputs = [ pkgs.pkg-config pkgs.mozjpeg];
        buildInputs = old.buildInputs ++ (with pkgs;[
            vips mozjpeg
        ]);
      });
    "pngquant-bin-5.0.2" =
      super."pngquant-bin-5.0.2".override (old: {
        preBuild = ''
        set +x
           echo "use(${pngquant}/bin/pngquant)" >> index.js
        '';
        nativeBuildInputs = with pkgs; [libpng];
        buildInputs = old.buildInputs ++ (with pkgs;[
            libpng
        ]);
      });
    mozjpeg =
      super.mozjpeg.override (old: {
        nativeBuildInputs = with pkgs; [ autoconf automake libtool nasm pkg-config];
        # buildInputs = old.buildInputs ++ (with pkgs;[
        #     vips mozjpeg nodePackages.imagemin-mozjpeg
        # ]);
      });
  };
  deps = # lib.attrValues self; #
    lib.attrValues (lib.filterAttrs unbroken self);

in (pkgs.buildFHSUserEnv {
  name  = "node-env";
  targetPkgs = p: with p; [ nodejs nodePackages.npm ]; # ++ deps;
  runScript = ''
    zsh
  '';
}).env
