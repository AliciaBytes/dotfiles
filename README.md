# dotfiles

My dotfiles and configurations.

## Requirements

I currently use [chezmoi](https://www.chezmoi.io/) to manage my dotfiles, so you'll need that installed.

## How to use

To use my dotfiles run

```sh
chezmoi init AliciaBytes
```

that should create the chezmoi configuration in `~/.local/share/chezmoi/`. You can then modify that configuration in your favorite text editor and once you're happy with it apply it with

```sh
chezmoi apply
```

To update the local configuration with upstream changes run

```sh
chezmoi update
```

## License

My dotfiles are licensed under the MIT License (MIT). Please have a look at [License.md](LICENSE.md) for more details.
