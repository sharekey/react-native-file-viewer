interface RNFileViewerOptions {
  mimeType?: string,
  onDismiss?(): any;
  displayName?: string;
  showOpenWithDialog?: boolean;
  showAppsSuggestions?: boolean;
}

declare function open(
  path: string,
  options?: RNFileViewerOptions | string
): Promise<void>;

declare namespace _default {
  export { open };
}

export default _default;
