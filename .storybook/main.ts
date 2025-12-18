import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  "stories": [
    "../app/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(config) {
    // React Routerプラグインを除外（より確実な方法）
    const filteredPlugins = (config.plugins || []).filter((plugin: any) => {
      // プラグイン名を複数の方法で取得
      let pluginName = 'unknown';
      try {
        pluginName =
          plugin?.name ||
          plugin?.constructor?.name ||
          (Array.isArray(plugin) ? plugin[0]?.name : null) ||
          (plugin?.apply ? 'function' : String(plugin));
      } catch (e) {
        pluginName = 'error';
      }

      // React Router関連のプラグインを検出（複数の方法で）
      let isReactRouter = false;
      try {
        const pluginStr = plugin?.apply?.toString() || plugin?.toString() || '';
        isReactRouter =
          pluginName?.includes('react-router') ||
          pluginName?.includes('@react-router') ||
          pluginStr.includes('react-router') ||
          pluginStr.includes('@react-router') ||
          pluginStr.includes('reactRouter') ||
          (plugin && typeof plugin === 'object' && 'reactRouter' in plugin);
      } catch (e) {
        // エラーが発生した場合は除外しない（安全のため）
      }

      return !isReactRouter;
    });

    // vite.config.tsを読み込まないようにするため、新しい設定を作成
    return mergeConfig(
      {
        ...config,
        plugins: filteredPlugins,
      },
      {
        plugins: [
          tailwindcss(),
        ],
      }
    );
  },
};
export default config;