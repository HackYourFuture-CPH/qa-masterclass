import config from "config";

interface PortalConfig {
  [portalName: string]: {
    [role: string]: {
      email: string;
      password: string;
    };
  };
}

export class LoginHelper {
  public getCredentialsForPortal(portalName: string, roleName: string) {
    const portalConfig: PortalConfig = config.get("portals");
    const portal = portalConfig[portalName];
    const role = portal[roleName];

    return [role.email, role.password];
  }
}

// Tip: install config
// npm i --save-dev @types/config

// Interface: defines the syntax that any entity must adhere to
