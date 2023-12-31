importScripts("./comlink.min.js");

const envFiles = () => {
  return {
    REACT_APP_API_URL: "https://api.develv2.cryptonets.ai/node",
    REACT_APP_API_URL_WASM: "https://api.develv2.cryptonets.ai/node",
    REACT_APP_API_KEY: "0000000000000000test",
    REACT_APP_WASM_MODULE: "face_mask",
    REACT_APP_ORCHESTRATION_API_URL:
      "https://api-orchestration.cams.devel.private.id",
    REACT_APP_API_ORCHESTRATION:
      "https://api-orchestration.cams.devel.private.id",
    SKIP_PREFLIGHT_CHECK: false,
  };
};

Comlink.expose({
  envFiles,
});
