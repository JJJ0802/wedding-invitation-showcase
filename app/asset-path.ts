export const assetPath = (path: string) =>
  `${process.env.GITHUB_ACTIONS ? "/wedding-invitation-showcase" : ""}${path}`;
