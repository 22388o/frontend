/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type HumanAddr = string;

export interface InitMsg {
  base_denom: string;
  mint_contract: HumanAddr;
  mirror_token: HumanAddr;
  oracle_contract: HumanAddr;
  owner: HumanAddr;
  premium_min_update_interval: number;
  terraswap_factory: HumanAddr;
  [k: string]: unknown;
}
