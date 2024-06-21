# al-volante-bot

## About the project

This is a Telegram Bot with the purpose to help people in AlVolante website

## How to setup the project

First, clone the project

```bash
    git clone git@github.com:AgusCarpincho/al-volante-bot.git
```

So, depending on what the project is used for, you can run the bot locally by running

```bash
    npm install
```

and then

```bash
    npm run start
```

If you want to run the bot in an isolated environment, the project is currently also prepared to be run in Docker.

Just use docker-compose with the next command

```bash
    docker-compose up --build
```

Or, if you prefer running it in background mode ...

```bash
    docker-compose up --build -d
```

Thats all !

For more info about managing containers and images please see the offical Docker documentation
