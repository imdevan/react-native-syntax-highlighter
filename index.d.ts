import React from 'react';
import { ScrollViewProps, TextStyle } from 'react-native';

export interface SyntaxHighlighterProps {
  /**
   * The code string to highlight
   */
  children: string;
  
  /**
   * The programming language to highlight
   */
  language?: string;
  
  /**
   * The syntax highlighter to use
   * @default "highlightjs"
   */
  highlighter?: 'highlightjs' | 'prism';
  
  /**
   * The style object for syntax highlighting
   * Can be a style object from react-syntax-highlighter/styles
   */
  style?: any;
  
  /**
   * Font family for the code text
   * @default Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace'
   */
  fontFamily?: string;
  
  /**
   * Font size for the code text
   * @default 12
   */
  fontSize?: number;
  
  /**
   * Component to use for the pre tag wrapper
   * @default ScrollView
   */
  PreTag?: React.ComponentType<ScrollViewProps>;
  
  /**
   * Component to use for the code tag wrapper
   * @default ScrollView
   */
  CodeTag?: React.ComponentType<ScrollViewProps>;
  
  /**
   * Whether to show line numbers
   */
  showLineNumbers?: boolean;
  
  /**
   * Starting line number when showing line numbers
   */
  startingLineNumber?: number;
  
  /**
   * Custom line number style
   */
  lineNumberStyle?: TextStyle;
  
  /**
   * Whether to wrap long lines
   */
  wrapLines?: boolean;
  
  /**
   * Lines to highlight (array of line numbers)
   */
  lineProps?: { [key: number]: React.HTMLProps<HTMLElement> };
  
  /**
   * Custom renderer function
   */
  renderer?: (props: { rows: any[]; stylesheet: any }) => React.ReactNode[];
  
  /**
   * Additional props passed to the underlying component
   */
  [key: string]: any;
}

/**
 * React Native Syntax Highlighter Component
 * 
 * A React Native component for syntax highlighting code with support for
 * both highlight.js and Prism.js highlighting engines.
 * 
 * @example
 * ```tsx
 * import SyntaxHighlighter from 'react-native-syntax-highlighter';
 * import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
 * 
 * <SyntaxHighlighter 
 *   language="javascript" 
 *   style={atomOneDark}
 *   fontSize={14}
 * >
 *   {`const hello = 'world';`}
 * </SyntaxHighlighter>
 * ```
 */
declare const SyntaxHighlighter: React.FC<SyntaxHighlighterProps>;

export default SyntaxHighlighter;