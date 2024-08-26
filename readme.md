# Solana Vanity Keypair Generator
[![npm version](https://img.shields.io/npm/v/solana-vanity-keypair-generator-js.svg)](https://www.npmjs.com/package/solana-vanity-keypair-generator-js)
[![npm downloads](https://img.shields.io/npm/dm/solana-vanity-keypair-generator-js.svg)](https://www.npmjs.com/package/solana-vanity-keypair-generator-js)
[![license](https://img.shields.io/npm/l/solana-vanity-keypair-generator-js.svg)](https://www.npmjs.com/package/solana-vanity-keypair-generator-js)

This package allows you to generate Solana keypairs with custom prefixes and/or suffixes. It utilizes multi-threading to improve performance and provides options for customization.

## Installation

```bash
npm install solana-vanity-keypair-generator
```

## Usage

Here's a basic example of how to use the package:

```javascript
const { generateSolanaVanityKeypair } = require('solana-vanity-keypair-generator');

async function main() {
  try {
    const result = await generateSolanaVanityKeypair({
      prefix: 'ABC',
      suffix: 'XYZ',
      timeoutSeconds: 600,
      cores: 4
    });
    console.log('Generated keypair:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
```

## Options

The `generateSolanaVanityKeypair` function accepts an options object with the following properties:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `prefix` | string | `''` | The desired prefix for the public key |
| `suffix` | string | `''` | The desired suffix for the public key |
| `timeoutSeconds` | number | 300 | The maximum time (in seconds) to spend trying to generate a matching keypair |
| `cores` | number | `os.cpus().length - 2` | The number of CPU cores to use for generation |

### Prefix and Suffix

- You can specify either a prefix, a suffix, or both.
- The generator will create keypairs that match the specified prefix and/or suffix.
- If both prefix and suffix are provided, the generated public key will start with the prefix and end with the suffix.
- Prefixes and suffixes are case-sensitive.

### Cores

- By default, the generator uses `os.cpus().length - 2` cores, leaving some CPU resources for other tasks.
- You can specify a custom number of cores to use for generation.
- Using more cores can speed up the generation process but will also increase CPU usage.

### Timeout

- The `timeoutSeconds` option sets a maximum duration for the generation process.
- If a matching keypair is not found within this time, the function will throw an error.
- Increase this value for more complex prefix/suffix combinations or if you're willing to wait longer for a result.

## Return Value

The function returns a Promise that resolves to an object containing:

- `publicKey`: The generated public key (as a base58-encoded string)
- `privateKey`: The corresponding private key (as a base58-encoded string)

## Error Handling

The function will throw an error if:

- The generation process times out
- All worker threads exit without finding a result

Make sure to wrap the function call in a try-catch block to handle potential errors.

## Performance Considerations

- Longer prefixes/suffixes or combinations of both will take longer to generate.
- The time required grows exponentially with the length of the desired prefix/suffix.
- Consider using shorter vanity strings for quicker results.

## License

This project is licensed under the MIT License.
