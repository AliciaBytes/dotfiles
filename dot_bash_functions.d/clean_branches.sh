clean_branches() {
    # Don't fetch information about newly gone branches. Just clean up
    # the ones we already knew are gone!
    # git fetch -p &&
    git for-each-ref --format '%(refname:short) %(upstream:track)' |
        awk '$2 == "[gone]" {print $1}' |
        xargs -r git branch -D
}
