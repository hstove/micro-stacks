import { BlockListResponse, Block } from '@stacks/stacks-blockchain-api-types';
import { BaseListParams } from '../types';
import { fetchJson, generateUrl, blockEndpoint } from '../utils';

/**
 * Get recent blocks
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_block_list
 */

export async function fetchBlocks({ url, limit, offset }: BaseListParams) {
  const path = generateUrl(blockEndpoint(url), {
    limit,
    offset,
  });
  return fetchJson<BlockListResponse>(path);
}

/**
 * Get a specific block by hash
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_block_by_hash
 */

export async function fetchBlock({ url, hash }: BaseListParams & { hash: string }) {
  const path = generateUrl(`${blockEndpoint(url)}/${hash}`, {});
  return fetchJson<Block>(path);
}

/**
 * Get a specific block by height
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_block_by_height
 */

export async function fetchBlockByHeight({ url, height }: BaseListParams & { height: number }) {
  const path = generateUrl(`${blockEndpoint(url)}/by_height/${height}`, {});
  return fetchJson<Block>(path);
}

/**
 * Get a specific block by burnchain block hash
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_block_by_burn_block_hash
 */

export async function fetchBlockByBurnBlockHash({
  url,
  burn_block_hash,
}: BaseListParams & { burn_block_hash: string }) {
  const path = generateUrl(`${blockEndpoint(url)}/by_burn_block_hash/${burn_block_hash}`, {});
  return fetchJson<Block>(path);
}

/**
 * Get a specific block by burn chain height
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_block_by_burn_block_height
 */

export async function fetchBlockByBurnBlockHeight({
  url,
  burn_block_height,
}: BaseListParams & { burn_block_height: number }) {
  const path = generateUrl(`${blockEndpoint(url)}/by_burn_block_height/${burn_block_height}`, {});
  return fetchJson<Block>(path);
}
