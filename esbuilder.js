require("esbuild").build({
  minify: true,
  outdir: "./public/dist",
  bundle: true,
  incremental: true,
  entryPoints: ["index.ts"],
  target: ["safari11", "chrome58", "firefox57", "edge16"],
  sourcemap: true,
  watch: {
    onRebuild(err, result) {
      if (err) console.error(err);
      else {
        console.clear();
        console.log("[BUILD SUCCEEDED]");
        console.log(`Errors: ${result.errors.length}`);
        console.log(`Warnings: ${result.warnings.length}`);
      }
    },
  },
});
