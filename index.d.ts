declare module 'rhett-background-color-changer' {
    import { FC, ReactNode } from 'react';
  
    interface BackgroundChangerProps {
      colors: string[];
      children: ReactNode;
    }
  
    export const BackgroundChanger: FC<BackgroundChangerProps>;
  }
  