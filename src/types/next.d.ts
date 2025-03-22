/// <reference types="next" />
/// <reference types="next/image-types/global" />

import { ReactNode } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
  }
} 