require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remind around include produce bubble solution'; 
let testAccounts = [
"0xc98f1f97e05e05d5abff967e8caeff46472dddc58680d935b588d65d6fd586ec",
"0x7f3776af48a4ed140f56be02260eb741cbdce5c2ac379cb18921c78360f374f9",
"0x43e35fb9f87fedd9114768821210cbd4811087d26ebaae10d9a1a0d59323f100",
"0x9c5b6813c0e386ec03e0a061b8e69c72ad743e55531e5eaf71e5192136bee730",
"0xef4fee735bf4a70641cb58b16c4d7274739572d5e01705afcec4b53920805cde",
"0x5c0efdfd74fb9b3452cc2f89e9b64ebbd98baa038b59356c3a783ba4cbaa991c",
"0x2989b5c4a816691517241ac5787ee6f0171feee244346fc1452244e14a06b9ff",
"0x2e7f8ce1196fea37d02847ce86072a93939dac18b67d6b8459f465613d986b3b",
"0x11018d321c87ed89d327282bad6dc2038922abfe6c84467f0d4eedae3b72f2a1",
"0x5c7b8a3d66229b369607c90de84c61d4346964b2a07ae612c72fc999d1116ed3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

