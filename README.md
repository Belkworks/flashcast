# Flashcast

a fine-grained alternative to FastCast

## Installation

1. Configure your `.npmrc`
```ini
public-hoist-pattern[]=*@rbxts*
@belkworks:registry=https://npm.pkg.github.com
```

2. Configure your `typeRoots`
```json
"typeRoots": ["node_modules/@rbxts", "node_modules/@belkworks"]
```

3. Add `@belkworks` to your Rojo project file
```json
"node_modules": {
    "@rbxts": {
        "$path": "node_modules/@rbxts"
    },
    "@belkworks": {
        "$path": "node_modules/@belkworks"
    }
}
```

4. Install the package
```sh
pnpm add @belkworks/flashcast
```
