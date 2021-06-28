/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Uint128 = string;
export type VoteOption = "yes" | "no";

export interface BalanceResponse {
  balance: Uint128;
  locked_balance: [number, VoterInfo][];
  share: Uint128;
  [k: string]: unknown;
}
export interface VoterInfo {
  balance: Uint128;
  vote: VoteOption;
  [k: string]: unknown;
}
