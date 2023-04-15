module.exports = {
  "stories": ["../stories/*.stories.mdx", "../stories/*.stories.@(ts|tsx)", "../stories/**/*.stories.@(ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-dark-mode", "@storybook/addon-a11y"],
  "staticDirs": ["./static"],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "docs": {
    "autodocs": true
  }
};