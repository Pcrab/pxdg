import { buildDirs, buildHome } from "./utils.js";

export const XDG_CONFIG_HOME = buildHome("XDG_CONFIG_HOME");
export const XDG_CACHE_HOME = buildHome("XDG_CACHE_HOME");
export const XDG_DATA_HOME = buildHome("XDG_DATA_HOME");
export const XDG_STATE_HOME = buildHome("XDG_STATE_HOME");
export const XDG_RUNTIME_DIR = buildHome("XDG_RUNTIME_DIR");

export const XDG_CONFIG_DIRS = buildDirs("XDG_CONFIG_DIRS");
export const XDG_DATA_DIRS = buildDirs("XDG_DATA_DIRS");
