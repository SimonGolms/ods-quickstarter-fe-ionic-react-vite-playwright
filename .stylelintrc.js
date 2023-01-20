module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-prettier"],
  rules: {
    /**
     * Ionic uses colors with an opacity (alpha) in several components.
     * In order for this to work, those properties must be provided in RGB format
     * in a comma separated format without parentheses.
     * see: https://ionicframework.com/docs/theming/advanced#the-alpha-problem
     */
    "color-function-notation": "legacy",
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
  },
};
