declare namespace React {
  interface IProfileMenuItemRef {
    title: string;
    items: {
      src: string;
      title: string;
      withBorder?: boolean;
      onClick?: React.MouseEventHandler<T>;
    }[];
  }
} 

// export {};
