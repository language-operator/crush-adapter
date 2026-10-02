/**
 * Crush emitter — placeholder.
 *
 * Writes a crush.json that names its schema and nothing else, so `coding-runtime
 * seed` has a harness config to own and stays idempotent. Translating the
 * normalized config — gateway provider, models, MCP servers, instructions — into
 * Crush's format is the bootstrap issue (#1), not this one.
 *
 * Crush reads $CRUSH_GLOBAL_CONFIG/crush.json; runtime.json points that at
 * $STATE_DIR/crush.
 */
export function emit(config) {
  const configDir = config.paths.stateDir ? `${config.paths.stateDir}/crush` : '/etc/crush';
  const values = { $schema: 'https://charm.land/crush.json' };
  return [{ path: `${configDir}/crush.json`, values, owns: Object.keys(values) }];
}

export default emit;
