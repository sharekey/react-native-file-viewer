interface RNFileViewerOptions {
  displayName?: string;
  showAppsSuggestions?: boolean;
  showOpenWithDialog?: boolean;
  onDismiss?(): any;
}

declare function open(
  path: string,
  options?: RNFileViewerOptions | string
): Promise<void>;

declare function canOpen(
  path: string,
): Promise<boolean>;

declare namespace _default {
  export { open, canOpen };
}

export default _default;
