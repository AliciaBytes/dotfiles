function set-up-gpg
    gpg --locate-keys alicia@aliciabytes.com
    gpg --refresh-keys
    gpg-connect-agent "scd serialno" "learn --force" /bye
end
