// vite.config.ts
import { nodePolyfills } from "file:///Users/scotttolinski/Sites/projects/tolinski/node_modules/.pnpm/vite-plugin-node-polyfills@0.22.0_rollup@4.18.0_vite@5.2.12_@types+node@20.14.0_/node_modules/vite-plugin-node-polyfills/dist/index.js";
import { sveltekit } from "file:///Users/scotttolinski/Sites/projects/tolinski/node_modules/.pnpm/@sveltejs+kit@2.5.10_@sveltejs+vite-plugin-svelte@3.1.1_svelte@5.0.0-next.148_vite@5.2.12_@ty_zzszhmhlvazb356dodcyrd44ke/node_modules/@sveltejs/kit/src/exports/vite/index.js";
var config = {
  plugins: [
    nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      include: ["path"]
    }),
    sveltekit()
  ]
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2NvdHR0b2xpbnNraS9TaXRlcy9wcm9qZWN0cy90b2xpbnNraVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Njb3R0dG9saW5za2kvU2l0ZXMvcHJvamVjdHMvdG9saW5za2kvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Njb3R0dG9saW5za2kvU2l0ZXMvcHJvamVjdHMvdG9saW5za2kvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzJztcbmltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cbmNvbnN0IGNvbmZpZyA9IHtcblx0cGx1Z2luczogW1xuXHRcdG5vZGVQb2x5ZmlsbHMoe1xuXHRcdFx0Ly8gVG8gYWRkIG9ubHkgc3BlY2lmaWMgcG9seWZpbGxzLCBhZGQgdGhlbSBoZXJlLiBJZiBubyBvcHRpb24gaXMgcGFzc2VkLCBhZGRzIGFsbCBwb2x5ZmlsbHNcblx0XHRcdGluY2x1ZGU6IFsncGF0aCddLFxuXHRcdH0pLFxuXHRcdHN2ZWx0ZWtpdCgpLFxuXHRdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsaUJBQWlCO0FBRzFCLElBQU0sU0FBUztBQUFBLEVBQ2QsU0FBUztBQUFBLElBQ1IsY0FBYztBQUFBO0FBQUEsTUFFYixTQUFTLENBQUMsTUFBTTtBQUFBLElBQ2pCLENBQUM7QUFBQSxJQUNELFVBQVU7QUFBQSxFQUNYO0FBQ0Q7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=