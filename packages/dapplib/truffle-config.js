require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember exchange hockey sleep flock ghost'; 
let testAccounts = [
"0x43d4a20da261db367c54b820f221959954e9b7dcb1475dd9a2c9830f5e2fc1f9",
"0xa673ea0c744c944203967f5a3b46f716aac2b05dccb7b30105fb8eed3aeffbb3",
"0x112d84c30406f105c3a416a43cb1dde2785ab927655812c9ba6399ba518c7bdf",
"0x7e43cbb9e9483206e6c4ab24783b14fc6a000e739eedd5ba20801e0753f20666",
"0x350cb51ae3a50fe4c4d3bf3393561156861be43f1286b5a8d0a378d90cf483e3",
"0x31b0a11801363f266c16107a75119d17fe1aee39d5c5464771fa655e58a3b03a",
"0x5cf2e18cb1c3bc892c15b90bc383cbc56c714fc18f1bd2aecebbaa3dd280ef2b",
"0x8f2abfabca94769a07a968a8e2fd48bdc828a308c8f7dc87f7056713d3c6c69d",
"0x1552ad02a864a132fba250a116e51fc95838bef519f3a93ad15beb07d964b6b9",
"0x14894d56f23daa463af0740b6410916b991fc35a12306427f7306ee2a6f33818"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


