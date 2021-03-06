import { endpointWithDefaults } from "./endpoint-with-defaults";
import { merge } from "./merge";
import { parse } from "./parse";
import { Endpoint, Defaults, endpoint, Route, Parameters } from "./types";

export function withDefaults(
  oldDefaults: Defaults | null,
  newDefaults: Parameters
): endpoint {
  const DEFAULTS = merge(oldDefaults, newDefaults);
  const endpoint = endpointWithDefaults.bind(null, DEFAULTS);

  return Object.assign(endpoint, {
    DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse
  });
}
