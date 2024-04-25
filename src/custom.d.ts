declare module '*.css'{
    const content: Record<string, string>;
    export default content;
}
declare module '*.scss'{
    const content: Record<string, string>;
    export default content;
}
declare module '*.svg' {
    const content: any;
    export default content;
  }
  
declare let document:Document;
declare let __non_webpack_require:any;