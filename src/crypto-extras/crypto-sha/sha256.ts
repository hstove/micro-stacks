import { sha256 } from 'noble-hashes/lib/sha256.js';
import { ensureUint8Array } from 'micro-stacks/common';

export function hashSha256(data: Uint8Array): Uint8Array {
  return sha256.create().update(ensureUint8Array(data)).digest();
}
