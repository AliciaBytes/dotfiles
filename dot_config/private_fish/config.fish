if status is-interactive
    # Commands to run in interactive sessions can go here
    source (starship init fish --print-full-init | psub)
    atuin init fish | source
end
