import {
  CoreNodeInfoResponse,
  ServerStatusResponse,
  NetworkBlockTimesResponse,
  NetworkBlockTimeResponse,
  GetStxSupplyResponse,
  GetStxTotalSupplyPlainResponse,
  GetStxCirculatingSupplyPlainResponse,
  GetStxSupplyLegacyFormatResponse,
  CoreNodePoxResponse,
} from '@stacks/stacks-blockchain-api-types';
import { BaseListParams } from '../types';

type WithHeight<T> = T & {
  height?: number;
};

import {
  fetchJson,
  fetchText,
  generateUrl,
  infoEndpoint,
  statusEndpoint,
  networkBlockTimesEndpoint,
  networkBlockTimeEndpoint,
  stxSupplyEndpoint,
  stxSupplyPlainEndpoint,
  stxSupplyCirculatingPlainEndpoint,
  stxSupplyLegacyFormatEndpoint,
  poxEndpoint,
} from '../utils';

/**
 * Get Core API information
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_core_api_info
 */

export async function fetchCoreApiInfo({ url }: BaseListParams) {
  const path = generateUrl(infoEndpoint(url), {});
  return fetchJson<CoreNodeInfoResponse>(path);
}

/**
 * Get Blockchain API status
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_status
 */

export async function fetchStatus({ url }: BaseListParams) {
  const path = generateUrl(statusEndpoint(url), {});
  return fetchJson<ServerStatusResponse>(path);
}

/**
 * Get the network target block time
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_network_block_times
 */

export async function fetchNetworkBlockTimes({ url }: BaseListParams) {
  const path = generateUrl(networkBlockTimesEndpoint(url), {});
  return fetchJson<NetworkBlockTimesResponse>(path);
}

/**
 * Get a given network's target block time
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_network_block_time_by_network
 */

export async function fetchNetworkBlockTime({
  url,
  network,
}: BaseListParams & { network: 'mainnet' | 'testnet' }) {
  const path = generateUrl(`${networkBlockTimeEndpoint(url)}/${network}`, {});
  return fetchJson<NetworkBlockTimeResponse>(path);
}

/**
 * Get total and unlocked STX supply
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_stx_supply
 */

export async function fetchStxSupply({ url, height }: WithHeight<BaseListParams>) {
  const path = generateUrl(stxSupplyEndpoint(url), {});
  return fetchJson<GetStxSupplyResponse>(path);
}

/**
 * Get total STX supply in plain text format
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_stx_supply_total_supply_plain
 */

export async function fetchStxSupplyPlain({ url }: BaseListParams) {
  const path = generateUrl(stxSupplyPlainEndpoint(url), {});
  return fetchText<GetStxTotalSupplyPlainResponse>(path);
}

/**
 * Get circulating STX supply in plain text format
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_stx_supply_circulating_plain
 */

export async function fetchStxSupplyCirculatingPlain({ url }: BaseListParams) {
  const path = generateUrl(stxSupplyCirculatingPlainEndpoint(url), {});
  return fetchText<GetStxCirculatingSupplyPlainResponse>(path);
}

/**
 * Get total and unlocked STX supply (results formatted the same as the legacy 1.0 API)
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_total_stx_supply_legacy_format
 */

export async function fetchStxSupplyLegacyFormat({ url, height }: WithHeight<BaseListParams>) {
  const path = generateUrl(stxSupplyLegacyFormatEndpoint(url), {});
  return fetchJson<GetStxSupplyLegacyFormatResponse>(path);
}

/**
 * Get PoX details
 *
 * @see https://blockstack.github.io/stacks-blockchain-api/#operation/get_pox_info
 */

export async function fetchPox({ url }: BaseListParams) {
  const path = generateUrl(poxEndpoint(url), {});
  return fetchJson<CoreNodePoxResponse>(path);
}
