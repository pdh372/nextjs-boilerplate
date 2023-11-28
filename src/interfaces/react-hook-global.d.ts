declare namespace React {
  interface IProfileMenuItemRef {
    title: string;
    items: {
      src: string;
      title: string;
      withBorder?: boolean;
      metadata?: any;
    }[];
  }
}

// export {};
