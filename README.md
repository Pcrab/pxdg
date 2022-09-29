# PXDG

A simple configuration helper library which respects XDG Base Directory settings.

## Usage

```typescript
import xdg from "@pcrab/pxdg";

/**
 *  {
 *      XDG_CACHE_HOME: "/home/pcrab/.cache",
 *      XDG_CONFIG_DIRS: [ "/etc/xdg" ],
 *      XDG_CONFIG_HOME: "/home/pcrab/.config",
 *      XDG_DATA_DIRS: [ "/usr/local/share", "/usr/share" ],
 *      XDG_DATA_HOME: "/home/pcrab/.local/share",
 *      XDG_RUNTIME_DIR: "/mnt/wslg/runtime-dir",
 *      XDG_STATE_HOME: "/home/pcrab/.local/state"
 *  }
 */
console.log(xdg);
```

It also has special support for `Windows`. However, because windows do not have
XDG Base Directory, these variables are set to `$env:APPDATA` or
`$env:LODALAPPDATA`.

```typescript
/**
 *  {
 *      XDG_CACHE_HOME: "C:\\Users\\micro\\AppData\\Local\\cache",
 *      XDG_CONFIG_DIRS: [ "C:\\Users\\micro\\AppData\\Roaming", "C:\\ProgramData" ],
 *      XDG_CONFIG_HOME: "C:\\Users\\micro\\AppData\\Local",
 *      XDG_DATA_DIRS: [ "C:\\Users\\micro\\AppData\\Roaming", "C:\\ProgramData" ],
 *      XDG_DATA_HOME: "C:\\Users\\micro\\AppData\\Local",
 *      XDG_RUNTIME_DIR: "C:\\Users\\micro\\AppData\\Local",
 *      XDG_STATE_HOME: "C:\\Users\\micro\\AppData\\Local"
 *  }
 */
console.log(xdg);
```
