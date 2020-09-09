{ pkgs ? import <nixpkgs> {inherit system;}
, system ? builtins.currentSystem
, nodejs ? pkgs."nodejs-12_x"}:

let
  super = import ./composition.nix {
    inherit pkgs nodejs;
    inherit system;
  };
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

in self
