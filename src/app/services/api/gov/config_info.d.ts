/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Uint128 = string;
export type HumanAddr = string;
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;

export interface ConfigInfo {
  effective_delay: number;
  expiration_period: number;
  mint_end: number;
  mint_per_block: Uint128;
  mint_start: number;
  owner: HumanAddr;
  proposal_deposit: Uint128;
  quorum: Decimal;
  spec_token?: HumanAddr | null;
  threshold: Decimal;
  voting_period: number;
  warchest_address?: HumanAddr | null;
  warchest_ratio: Decimal;
  [k: string]: unknown;
}
