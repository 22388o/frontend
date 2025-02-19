/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ExecuteMsg =
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      bond: {
        assets: [Asset, Asset];
        compound_rate?: Decimal | null;
        contract: string;
        slippage_tolerance: Decimal;
        staker_addr?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      bond_hook: {
        asset_token: string;
        compound_rate?: Decimal | null;
        contract: string;
        prev_staking_token_amount: Uint128;
        staker_addr: string;
        staking_token: string;
        [k: string]: unknown;
      };
    }
  | {
      zap_to_bond: {
        belief_price?: Decimal | null;
        belief_price_b?: Decimal | null;
        compound_rate?: Decimal | null;
        contract: string;
        max_spread: Decimal;
        pair_asset: AssetInfo;
        pair_asset_b?: AssetInfo | null;
        provide_asset: Asset;
        [k: string]: unknown;
      };
    }
  | {
      update_config: {
        insert_allowlist?: string[] | null;
        remove_allowlist?: string[] | null;
        [k: string]: unknown;
      };
    }
  | {
      zap_to_unbond_hook: {
        belief_price_a?: Decimal | null;
        belief_price_b?: Decimal | null;
        max_spread: Decimal;
        prev_asset_a: Asset;
        prev_asset_b?: Asset | null;
        prev_target_asset: Asset;
        staker_addr: string;
        [k: string]: unknown;
      };
    };
/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
export type Uint128 = string;
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>
 */
export type Binary = string;
/**
 * AssetInfo contract_addr is usually passed from the cw20 hook so we can trust the contract_addr is properly validated.
 */
export type AssetInfo =
  | {
      token: {
        contract_addr: string;
        [k: string]: unknown;
      };
    }
  | {
      native_token: {
        denom: string;
        [k: string]: unknown;
      };
    };
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;

/**
 * Cw20ReceiveMsg should be de/serialized under `Receive()` variant in a ExecuteMsg
 */
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
  [k: string]: unknown;
}
export interface Asset {
  amount: Uint128;
  info: AssetInfo;
  [k: string]: unknown;
}
