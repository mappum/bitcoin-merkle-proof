# bitcoin-merkle-tree

[![npm version](https://img.shields.io/npm/v/bitcoin-merkle-tree.svg)](https://www.npmjs.com/package/bitcoin-merkle-tree)
[![Build Status](https://travis-ci.org/mappum/bitcoin-merkle-tree.svg?branch=master)](https://travis-ci.org/mappum/bitcoin-merkle-tree)
[![Dependency Status](https://david-dm.org/mappum/bitcoin-merkle-tree.svg)](https://david-dm.org/mappum/bitcoin-merkle-tree)

**Verify Bitcoin Merkle trees**

Bitcoin [BIP37](https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki) adds support for `merkleblock` messages, which allow clients to download blocks that only include transactions relevant to them. The transactions are selected via a Bloom Filter.

This module verifies the Merkle proofs in a `merkleblock` message, and lists the included transactions which match the filter.

## Usage

`npm install bitcoin-merkle-tree`

```js
var merkleTree = require('bitcoin-merkle-tree')

// data from a `merkleblock` message
var merkleblock = {
  flags: [ 0x1d ],
  hashes: [
    '3612262624047ee87660be1a707519a443b1c1ce3d248cbfc6c15870f6c5daa2',
    '019f5b01d4195ecbc9398fbf3c3b1fa9bb3183301d7a1fb3bd174fcfa40a2b65',
    '41ed70551dd7e841883ab8f0b16bf04176b7d1480e4f0af9f3d4c3595768d068',
    '20d2a7bc994987302e5b1ac80fc425fe25f8b63169ea78e68fbaaefa59379bbf'
  ],
  numTransactions: 7,
  header: {
    merkleRoot: new Buffer('7f16c5962e8bd963659c793ce370d95f093bc7e367117b3c30c1f8fdd0d97287', 'hex')
  }
}
var tree = merkleTree(merkleblock)
console.log('matched transactions:', tree.txids)
```

### `var tree = merkleTree(merkleblock)`

Takes a block from a `merkleblock` message, and verifies the tree. An error will be thrown if the tree does not match the expected Merkle root. Returns a `MerkleTree` object.

### `tree.txids`

An array of txids (as `Buffers`), that matched the Bloom filter.
