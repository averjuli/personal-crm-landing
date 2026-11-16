#!/usr/bin/env bash
# One-time installation against the reviewed server configuration.
set -euo pipefail

if [[ $EUID -ne 0 ]]; then
    echo "Run this script with sudo." >&2
    exit 1
fi

source_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
source_config="$source_dir/vupsen.conf"
target_config=/etc/nginx/sites-available/vupsen.conf
expected_hash=64fdd7532bcb050a0b5643a57d6f43ec8761ba9a520b43629864c9febe01e7bd
previous_security_hash=b35ddfb007ca3a8ed070e614509464ae3a041f973568941ead5d0336216e7c9c

if cmp -s "$source_config" "$target_config"; then
    echo "The landing security configuration is already installed."
    exit 0
fi

actual_hash=$(sha256sum "$target_config" | cut -d ' ' -f 1)
if [[ "$actual_hash" != "$expected_hash" && "$actual_hash" != "$previous_security_hash" ]]; then
    echo "The server configuration has changed. Review it before applying." >&2
    exit 1
fi

# Check the existing configuration before touching any files.
/usr/sbin/nginx -t
backup_config=$(mktemp /etc/nginx/vupsen.conf.before-landing-security.XXXXXX)
cp -p -- "$target_config" "$backup_config"
echo "Backup: $backup_config"
install -o root -g root -m 644 -- "$source_config" "$target_config"

if ! /usr/sbin/nginx -t; then
    cp -p -- "$backup_config" "$target_config"
    echo "Invalid configuration; the previous file was restored. No reload performed." >&2
    exit 1
fi

if ! systemctl reload nginx; then
    cp -p -- "$backup_config" "$target_config"
    echo "Reload failed; the previous configuration file was restored. Inspect nginx status." >&2
    exit 1
fi

echo "Landing security headers installed and nginx reloaded."
