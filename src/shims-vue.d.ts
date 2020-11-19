/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
