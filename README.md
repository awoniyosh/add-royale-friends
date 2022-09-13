# add-royale-friends

Clash Royale app with DETA.
Generate a link to add friends.

## Installation

## Create .env file. and write.

```bash
touch .env
```

```.env
# https://asahi-net.jp/support/guide/homepage/0017.html
BINARY_CONTENT_TYPES=image/*,font/*,video/*
```

## Setting

```bash
curl -fsSL https://get.deta.dev/cli.sh | sh
deta new --node <name>
npm i
deta deploy
deta update -e .env
```

[docs.deta.sh/docs](https://docs.deta.sh/docs/micros/getting_started)

## Usage

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  
Please make sure to update tests as appropriate.

## Completed Link

[add-royale-friends.deta.dev](https://add-royale-friends.deta.dev/)

## License

[MIT](./LICENSE)
