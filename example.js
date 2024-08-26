const { generateSolanaVanityKeypair } = require('./index');

async function main() {
  try {
    const result = await generateSolanaVanityKeypair({
     // prefix: 'ABC',
      suffix: 'pump',
      timeoutSeconds: 600,
     // cores: 4
    });
    console.log('Generated keypair:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();