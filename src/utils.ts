import os from "os";
import path from "path";
import { XDGDirsName, XDGHomeName } from "types.js";

const isWin = process.platform === "win32";
const homeDir = os.homedir();

const DefaultHome: Record<XDGHomeName, string> = {
    XDG_CONFIG_HOME: isWin
        ? process.env["LOCALAPPDATA"] || ""
        : path.join(homeDir, ".config"),
    XDG_CACHE_HOME: isWin
        ? path.join(process.env["LOCALAPPDATA"] || "", "cache")
        : path.join(homeDir, ".cache"),
    XDG_DATA_HOME: isWin
        ? process.env["LOCALAPPDATA"] || ""
        : path.join(homeDir, ".local", "share"),
    XDG_STATE_HOME: isWin
        ? process.env["LOCALAPPDATA"] || ""
        : path.join(homeDir, ".local", "state"),
    XDG_RUNTIME_DIR: isWin
        ? process.env["LOCALAPPDATA"] || ""
        : `/run/user/${os.userInfo().uid}`,
};

const buildHome = (envName: XDGHomeName): string => {
    return process.env[envName] || DefaultHome[envName];
};

const DefaultDirs: Record<XDGDirsName, string> = {
    XDG_CONFIG_DIRS: isWin
        ? `${process.env["APPDATA"] || ""}:${process.env["ProgramData"] || ""}`
        : "/etc/xdg",
    XDG_DATA_DIRS: isWin
        ? `${process.env["APPDATA"] || ""}:${process.env["ProgramData"] || ""}`
        : "/usr/local/share:/usr/share",
};

const buildDirs = (envName: XDGDirsName): string[] => {
    return (process.env[envName] || DefaultDirs[envName])
        .split(":")
        .filter((dir) => dir);
};

export { buildHome, buildDirs };
