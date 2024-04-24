function update npm update --location=global
    rustup self update
    rustup update
    cargo install cargo-binstall

    # Sync, search and backup shell history with Atuin
    cargo binstall --no-confirm atuin

    # Cargo plugin for generating a license listing for all dependencies of a crate
    cargo binstall --no-confirm cargo-about
    # Binary installation for rust projects
    cargo binstall --no-confirm cargo-binstall
    # Display information on the cargo cache (~/.cargo/ or $CARGO_HOME). Optional cache pruning.
    cargo binstall --no-confirm cargo-cache
    # Cargo subcommand for checking your documentation for broken links
    cargo binstall --no-confirm cargo-deadlinks
    # cargo-deny is a cargo plugin that lets you lint your project's dependency graph to ensure all your dependencies conform to your expectations and requirements.
    cargo binstall --no-confirm cargo-deny
    # A cargo subcommand for displaying when different versions of a same dependency are pulled in
    cargo binstall --no-confirm cargo-duplicates
    # Detects usage of unsafe Rust in a Rust crate and its dependencies.
    cargo binstall --no-confirm cargo-geiger
    # Gather author, contributor and publisher data on crates in your dependency graph.
    cargo binstall --no-confirm cargo-supply-chain
    # A syntax-highlighting pager for git, diff, and grep output
    cargo binstall --no-confirm git-delta
    # A command-line benchmarking tool
    cargo binstall --no-confirm hyperfine
    # ripgrep recursively searches directories for a regex pattern while respecting your gitignore
    cargo binstall --no-confirm ripgrep
    # Count your code, quickly.
    cargo binstall --no-confirm tokei

    cargo cache -e
end
