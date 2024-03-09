update() {
    npm update --location=global
    rustup self update
    rustup update
    cargo install cargo-binstall
    cargo binstall cargo-about cargo-binstall cargo-cache cargo-deadlinks cargo-deny cargo-duplicates cargo-geiger cargo-supply-chain hyperfine ripgrep tokei
    cargo cache -e
}
