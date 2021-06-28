/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type HumanAddr = string;
export type Uint128 = string;
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0 The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;

export interface InitMsg {
  effective_delay: number;
  expiration_period: number;
  mirror_token: HumanAddr;
  proposal_deposit: Uint128;
  quorum: Decimal;
  snapshot_period: number;
  threshold: Decimal;
  voter_weight: Decimal;
  voting_period: number;
  [k: string]: unknown;
}
