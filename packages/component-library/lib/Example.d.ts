import { ReactNode } from 'react';
export interface ExampleProps {
    text: string;
    content: ReactNode;
}
export declare function Example({ content, text }: ExampleProps): JSX.Element;
